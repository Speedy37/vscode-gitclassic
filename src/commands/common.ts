'use strict';
import * as paths from 'path';
import {
	commands,
	Disposable,
	ExtensionContext,
	GitTimelineItem,
	SourceControlResourceGroup,
	SourceControlResourceState,
	TextDocumentShowOptions,
	TextEditor,
	TextEditorEdit,
	TimelineItem,
	Uri,
	ViewColumn,
	window,
	workspace,
} from 'vscode';
import type { Action, ActionContext } from '../api/gitclassic';
import { BuiltInCommands, DocumentSchemes, ImageMimetypes } from '../constants';
import { Container } from '../container';
import { GitBranch, GitCommit, GitContributor, GitFile, GitReference, GitRemote, GitTag, Repository } from '../git/git';
import { GitUri } from '../git/gitUri';
import { Logger } from '../logger';
import { CommandQuickPickItem, RepositoryPicker } from '../quickpicks';
import { ViewNode, ViewRefNode } from '../views/nodes';

export enum Commands {
	ActionPrefix = 'gitclassic.action.',
	AddAuthors = 'gitclassic.addAuthors',
	BrowseRepoAtRevision = 'gitclassic.browseRepoAtRevision',
	BrowseRepoAtRevisionInNewWindow = 'gitclassic.browseRepoAtRevisionInNewWindow',
	BrowseRepoBeforeRevision = 'gitclassic.browseRepoBeforeRevision',
	BrowseRepoBeforeRevisionInNewWindow = 'gitclassic.browseRepoBeforeRevisionInNewWindow',
	ClearFileAnnotations = 'gitclassic.clearFileAnnotations',
	CloseUnchangedFiles = 'gitclassic.closeUnchangedFiles',
	CloseWelcomeView = 'gitclassic.closeWelcomeView',
	CompareWith = 'gitclassic.compareWith',
	CompareHeadWith = 'gitclassic.compareHeadWith',
	CompareWorkingWith = 'gitclassic.compareWorkingWith',
	ComputingFileAnnotations = 'gitclassic.computingFileAnnotations',
	ConnectRemoteProvider = 'gitclassic.connectRemoteProvider',
	CopyCurrentBranch = 'gitclassic.copyCurrentBranch',
	CopyMessageToClipboard = 'gitclassic.copyMessageToClipboard',
	CopyRemoteBranchesUrl = 'gitclassic.copyRemoteBranchesUrl',
	CopyRemoteBranchUrl = 'gitclassic.copyRemoteBranchUrl',
	CopyRemoteCommitUrl = 'gitclassic.copyRemoteCommitUrl',
	CopyRemoteComparisonUrl = 'gitclassic.copyRemoteComparisonUrl',
	CopyRemoteFileUrl = 'gitclassic.copyRemoteFileUrlToClipboard',
	CopyRemoteFileUrlWithoutRange = 'gitclassic.copyRemoteFileUrlWithoutRange',
	CopyRemoteFileUrlFrom = 'gitclassic.copyRemoteFileUrlFrom',
	CopyRemotePullRequestUrl = 'gitclassic.copyRemotePullRequestUrl',
	CopyRemoteRepositoryUrl = 'gitclassic.copyRemoteRepositoryUrl',
	CopyShaToClipboard = 'gitclassic.copyShaToClipboard',
	CreatePullRequestOnRemote = 'gitclassic.createPullRequestOnRemote',
	DiffDirectory = 'gitclassic.diffDirectory',
	DiffDirectoryWithHead = 'gitclassic.diffDirectoryWithHead',
	DiffWith = 'gitclassic.diffWith',
	DiffWithNext = 'gitclassic.diffWithNext',
	DiffWithNextInDiffLeft = 'gitclassic.diffWithNextInDiffLeft',
	DiffWithNextInDiffRight = 'gitclassic.diffWithNextInDiffRight',
	DiffWithPrevious = 'gitclassic.diffWithPrevious',
	DiffWithPreviousInDiffLeft = 'gitclassic.diffWithPreviousInDiffLeft',
	DiffWithPreviousInDiffRight = 'gitclassic.diffWithPreviousInDiffRight',
	DiffLineWithPrevious = 'gitclassic.diffLineWithPrevious',
	DiffWithRevision = 'gitclassic.diffWithRevision',
	DiffWithRevisionFrom = 'gitclassic.diffWithRevisionFrom',
	DiffWithWorking = 'gitclassic.diffWithWorking',
	DiffWithWorkingInDiffLeft = 'gitclassic.diffWithWorkingInDiffLeft',
	DiffWithWorkingInDiffRight = 'gitclassic.diffWithWorkingInDiffRight',
	DiffLineWithWorking = 'gitclassic.diffLineWithWorking',
	DisconnectRemoteProvider = 'gitclassic.disconnectRemoteProvider',
	DisableDebugLogging = 'gitclassic.disableDebugLogging',
	EnableDebugLogging = 'gitclassic.enableDebugLogging',
	DisableRebaseEditor = 'gitclassic.disableRebaseEditor',
	EnableRebaseEditor = 'gitclassic.enableRebaseEditor',
	ExternalDiff = 'gitclassic.externalDiff',
	ExternalDiffAll = 'gitclassic.externalDiffAll',
	FetchRepositories = 'gitclassic.fetchRepositories',
	InviteToLiveShare = 'gitclassic.inviteToLiveShare',
	OpenBlamePriorToChange = 'gitclassic.openBlamePriorToChange',
	OpenBranchesOnRemote = 'gitclassic.openBranchesOnRemote',
	OpenBranchOnRemote = 'gitclassic.openBranchOnRemote',
	OpenChangedFiles = 'gitclassic.openChangedFiles',
	OpenCommitOnRemote = 'gitclassic.openCommitOnRemote',
	OpenComparisonOnRemote = 'gitclassic.openComparisonOnRemote',
	OpenFileHistory = 'gitclassic.openFileHistory',
	OpenFileFromRemote = 'gitclassic.openFileFromRemote',
	OpenFileOnRemote = 'gitclassic.openFileOnRemote',
	OpenFileOnRemoteFrom = 'gitclassic.openFileOnRemoteFrom',
	OpenFileAtRevision = 'gitclassic.openFileRevision',
	OpenFileAtRevisionFrom = 'gitclassic.openFileRevisionFrom',
	OpenFolderHistory = 'gitclassic.openFolderHistory',
	OpenOnRemote = 'gitclassic.openOnRemote',
	OpenPullRequestOnRemote = 'gitclassic.openPullRequestOnRemote',
	OpenAssociatedPullRequestOnRemote = 'gitclassic.openAssociatedPullRequestOnRemote',
	OpenRepoOnRemote = 'gitclassic.openRepoOnRemote',
	OpenRevisionFile = 'gitclassic.openRevisionFile',
	OpenRevisionFileInDiffLeft = 'gitclassic.openRevisionFileInDiffLeft',
	OpenRevisionFileInDiffRight = 'gitclassic.openRevisionFileInDiffRight',
	OpenWorkingFile = 'gitclassic.openWorkingFile',
	OpenWorkingFileInDiffLeft = 'gitclassic.openWorkingFileInDiffLeft',
	OpenWorkingFileInDiffRight = 'gitclassic.openWorkingFileInDiffRight',
	PullRepositories = 'gitclassic.pullRepositories',
	PushRepositories = 'gitclassic.pushRepositories',
	GitCommands = 'gitclassic.gitCommands',
	GitCommandsBranch = 'gitclassic.gitCommands.branch',
	GitCommandsCherryPick = 'gitclassic.gitCommands.cherryPick',
	GitCommandsMerge = 'gitclassic.gitCommands.merge',
	GitCommandsRebase = 'gitclassic.gitCommands.rebase',
	GitCommandsReset = 'gitclassic.gitCommands.reset',
	GitCommandsRevert = 'gitclassic.gitCommands.revert',
	GitCommandsSwitch = 'gitclassic.gitCommands.switch',
	GitCommandsTag = 'gitclassic.gitCommands.tag',
	QuickOpenFileHistory = 'gitclassic.quickOpenFileHistory',
	RefreshHover = 'gitclassic.refreshHover',
	ResetAvatarCache = 'gitclassic.resetAvatarCache',
	ResetSuppressedWarnings = 'gitclassic.resetSuppressedWarnings',
	RevealCommitInView = 'gitclassic.revealCommitInView',
	SearchCommits = 'gitclassic.showCommitSearch',
	SearchCommitsInView = 'gitclassic.views.searchAndCompare.searchCommits',
	SetViewsLayout = 'gitclassic.setViewsLayout',
	ShowBranchesView = 'gitclassic.showBranchesView',
	ShowCommitInView = 'gitclassic.showCommitInView',
	ShowCommitsInView = 'gitclassic.showCommitsInView',
	ShowCommitsView = 'gitclassic.showCommitsView',
	ShowContributorsView = 'gitclassic.showContributorsView',
	ShowFileHistoryView = 'gitclassic.showFileHistoryView',
	ShowLastQuickPick = 'gitclassic.showLastQuickPick',
	ShowLineHistoryView = 'gitclassic.showLineHistoryView',
	ShowQuickBranchHistory = 'gitclassic.showQuickBranchHistory',
	ShowQuickCommit = 'gitclassic.showQuickCommitDetails',
	ShowQuickCommitFile = 'gitclassic.showQuickCommitFileDetails',
	ShowQuickCurrentBranchHistory = 'gitclassic.showQuickRepoHistory',
	ShowQuickFileHistory = 'gitclassic.showQuickFileHistory',
	ShowQuickRepoStatus = 'gitclassic.showQuickRepoStatus',
	ShowQuickCommitRevision = 'gitclassic.showQuickRevisionDetails',
	ShowQuickCommitRevisionInDiffLeft = 'gitclassic.showQuickRevisionDetailsInDiffLeft',
	ShowQuickCommitRevisionInDiffRight = 'gitclassic.showQuickRevisionDetailsInDiffRight',
	ShowQuickStashList = 'gitclassic.showQuickStashList',
	ShowRemotesView = 'gitclassic.showRemotesView',
	ShowRepositoriesView = 'gitclassic.showRepositoriesView',
	ShowSearchAndCompareView = 'gitclassic.showSearchAndCompareView',
	ShowSettingsPage = 'gitclassic.showSettingsPage',
	ShowSettingsPageAndJumpToBranchesView = 'gitclassic.showSettingsPage#branches-view',
	ShowSettingsPageAndJumpToCommitsView = 'gitclassic.showSettingsPage#commits-view',
	ShowSettingsPageAndJumpToContributorsView = 'gitclassic.showSettingsPage#contributors-view',
	ShowSettingsPageAndJumpToFileHistoryView = 'gitclassic.showSettingsPage#file-history-view',
	ShowSettingsPageAndJumpToLineHistoryView = 'gitclassic.showSettingsPage#line-history-view',
	ShowSettingsPageAndJumpToRemotesView = 'gitclassic.showSettingsPage#remotes-view',
	ShowSettingsPageAndJumpToRepositoriesView = 'gitclassic.showSettingsPage#repositories-view',
	ShowSettingsPageAndJumpToSearchAndCompareView = 'gitclassic.showSettingsPage#search-compare-view',
	ShowSettingsPageAndJumpToStashesView = 'gitclassic.showSettingsPage#stashes-view',
	ShowSettingsPageAndJumpToTagsView = 'gitclassic.showSettingsPage#tags-view',
	ShowSettingsPageAndJumpToViews = 'gitclassic.showSettingsPage#views',
	ShowStashesView = 'gitclassic.showStashesView',
	ShowTagsView = 'gitclassic.showTagsView',
	ShowWelcomePage = 'gitclassic.showWelcomePage',
	ShowWelcomeView = 'gitclassic.showWelcomeView',
	StashApply = 'gitclassic.stashApply',
	StashSave = 'gitclassic.stashSave',
	StashSaveFiles = 'gitclassic.stashSaveFiles',
	SwitchMode = 'gitclassic.switchMode',
	ToggleCodeLens = 'gitclassic.toggleCodeLens',
	ToggleFileBlame = 'gitclassic.toggleFileBlame',
	ToggleFileBlameInDiffLeft = 'gitclassic.toggleFileBlameInDiffLeft',
	ToggleFileBlameInDiffRight = 'gitclassic.toggleFileBlameInDiffRight',
	ToggleFileChanges = 'gitclassic.toggleFileChanges',
	ToggleFileChangesOnly = 'gitclassic.toggleFileChangesOnly',
	ToggleFileHeatmap = 'gitclassic.toggleFileHeatmap',
	ToggleFileHeatmapInDiffLeft = 'gitclassic.toggleFileHeatmapInDiffLeft',
	ToggleFileHeatmapInDiffRight = 'gitclassic.toggleFileHeatmapInDiffRight',
	ToggleLineBlame = 'gitclassic.toggleLineBlame',
	ToggleReviewMode = 'gitclassic.toggleReviewMode',
	ToggleZenMode = 'gitclassic.toggleZenMode',
	ViewsOpenDirectoryDiff = 'gitclassic.views.openDirectoryDiff',
	ViewsOpenDirectoryDiffWithWorking = 'gitclassic.views.openDirectoryDiffWithWorking',

	Deprecated_DiffHeadWith = 'gitclassic.diffHeadWith',
	Deprecated_DiffWorkingWith = 'gitclassic.diffWorkingWith',
	Deprecated_OpenBranchesInRemote = 'gitclassic.openBranchesInRemote',
	Deprecated_OpenBranchInRemote = 'gitclassic.openBranchInRemote',
	Deprecated_OpenCommitInRemote = 'gitclassic.openCommitInRemote',
	Deprecated_OpenFileInRemote = 'gitclassic.openFileInRemote',
	Deprecated_OpenInRemote = 'gitclassic.openInRemote',
	Deprecated_OpenRepoInRemote = 'gitclassic.openRepoInRemote',
	Deprecated_ShowFileHistoryInView = 'gitclassic.showFileHistoryInView',
}

export function executeActionCommand<T extends ActionContext>(action: Action<T>, args: Omit<T, 'type'>) {
	return commands.executeCommand(`${Commands.ActionPrefix}${action}`, { ...args, type: action });
}

export function getMarkdownActionCommand<T extends ActionContext>(action: Action<T>, args: Omit<T, 'type'>): string {
	return Command.getMarkdownCommandArgsCore(`${Commands.ActionPrefix}${action}`, {
		...args,
		type: action,
	});
}

export function executeCommand<T>(command: Commands, args: T) {
	return commands.executeCommand(command, args);
}

export function executeEditorCommand<T>(command: Commands, uri: Uri | undefined, args: T) {
	return commands.executeCommand(command, uri, args);
}

interface CommandConstructor {
	new (): Command;
}

const registrableCommands: CommandConstructor[] = [];

export function command(): ClassDecorator {
	return (target: any) => {
		registrableCommands.push(target);
	};
}

export function registerCommands(context: ExtensionContext): void {
	for (const c of registrableCommands) {
		context.subscriptions.push(new c());
	}
}

export function getCommandUri(uri?: Uri, editor?: TextEditor): Uri | undefined {
	// Always use the editor.uri (if we have one), so we are correct for a split diff
	return editor?.document?.uri ?? uri;
}

export async function getRepoPathOrActiveOrPrompt(uri: Uri | undefined, editor: TextEditor | undefined, title: string) {
	const repoPath = await Container.git.getRepoPathOrActive(uri, editor);
	if (repoPath) return repoPath;

	const pick = await RepositoryPicker.show(title);
	if (pick instanceof CommandQuickPickItem) {
		await pick.execute();
		return undefined;
	}

	return pick?.repoPath;
}

export async function getRepoPathOrPrompt(title: string, uri?: Uri) {
	const repoPath = await Container.git.getRepoPath(uri);
	if (repoPath) return repoPath;

	const pick = await RepositoryPicker.show(title);
	if (pick instanceof CommandQuickPickItem) {
		void (await pick.execute());
		return undefined;
	}

	return pick?.repoPath;
}

export interface CommandContextParsingOptions {
	expectsEditor: boolean;
}

export interface CommandBaseContext {
	command: string;
	editor?: TextEditor;
	uri?: Uri;
}

export interface CommandGitTimelineItemContext extends CommandBaseContext {
	readonly type: 'timeline-item:git';
	readonly item: GitTimelineItem;
	readonly uri: Uri;
}

export interface CommandScmGroupsContext extends CommandBaseContext {
	readonly type: 'scm-groups';
	readonly scmResourceGroups: SourceControlResourceGroup[];
}

export interface CommandScmStatesContext extends CommandBaseContext {
	readonly type: 'scm-states';
	readonly scmResourceStates: SourceControlResourceState[];
}

export interface CommandUnknownContext extends CommandBaseContext {
	readonly type: 'unknown';
}

export interface CommandUriContext extends CommandBaseContext {
	readonly type: 'uri';
}

export interface CommandUrisContext extends CommandBaseContext {
	readonly type: 'uris';
	readonly uris: Uri[];
}

// export interface CommandViewContext extends CommandBaseContext {
//     readonly type: 'view';
// }

export interface CommandViewNodeContext extends CommandBaseContext {
	readonly type: 'viewItem';
	readonly node: ViewNode;
}

export function isCommandContextGitTimelineItem(context: CommandContext): context is CommandGitTimelineItemContext {
	return context.type === 'timeline-item:git';
}

export function isCommandContextViewNodeHasBranch(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { branch: GitBranch } } {
	if (context.type !== 'viewItem') return false;

	return GitBranch.is((context.node as ViewNode & { branch: GitBranch }).branch);
}

export function isCommandContextViewNodeHasCommit<T extends GitCommit>(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { commit: T } } {
	if (context.type !== 'viewItem') return false;

	return GitCommit.is((context.node as ViewNode & { commit: GitCommit }).commit);
}

export function isCommandContextViewNodeHasContributor(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { contributor: GitContributor } } {
	if (context.type !== 'viewItem') return false;

	return GitContributor.is((context.node as ViewNode & { contributor: GitContributor }).contributor);
}

export function isCommandContextViewNodeHasFile(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { file: GitFile; repoPath: string } } {
	if (context.type !== 'viewItem') return false;

	const node = context.node as ViewNode & { file: GitFile; repoPath: string };
	return node.file != null && (node.file.repoPath != null || node.repoPath != null);
}

export function isCommandContextViewNodeHasFileCommit(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { commit: GitCommit; file: GitFile; repoPath: string } } {
	if (context.type !== 'viewItem') return false;

	const node = context.node as ViewNode & { commit: GitCommit; file: GitFile; repoPath: string };
	return node.file != null && GitCommit.is(node.commit) && (node.file.repoPath != null || node.repoPath != null);
}

export function isCommandContextViewNodeHasFileRefs(context: CommandContext): context is CommandViewNodeContext & {
	node: ViewNode & { file: GitFile; ref1: string; ref2: string; repoPath: string };
} {
	if (context.type !== 'viewItem') return false;

	const node = context.node as ViewNode & { file: GitFile; ref1: string; ref2: string; repoPath: string };
	return (
		node.file != null &&
		node.ref1 != null &&
		node.ref2 != null &&
		(node.file.repoPath != null || node.repoPath != null)
	);
}

export function isCommandContextViewNodeHasRef(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { ref: GitReference } } {
	return context.type === 'viewItem' && context.node instanceof ViewRefNode;
}

export function isCommandContextViewNodeHasRemote(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { remote: GitRemote } } {
	if (context.type !== 'viewItem') return false;

	return GitRemote.is((context.node as ViewNode & { remote: GitRemote }).remote);
}

export function isCommandContextViewNodeHasRepository(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { repo: Repository } } {
	if (context.type !== 'viewItem') return false;

	return (context.node as ViewNode & { repo?: Repository }).repo instanceof Repository;
}

export function isCommandContextViewNodeHasRepoPath(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { repoPath: string } } {
	if (context.type !== 'viewItem') return false;

	return typeof (context.node as ViewNode & { repoPath?: string }).repoPath === 'string';
}

export function isCommandContextViewNodeHasTag(
	context: CommandContext,
): context is CommandViewNodeContext & { node: ViewNode & { tag: GitTag } } {
	if (context.type !== 'viewItem') return false;

	return GitTag.is((context.node as ViewNode & { tag: GitTag }).tag);
}

export type CommandContext =
	| CommandGitTimelineItemContext
	| CommandScmGroupsContext
	| CommandScmStatesContext
	| CommandUnknownContext
	| CommandUriContext
	| CommandUrisContext
	// | CommandViewContext
	| CommandViewNodeContext;

function isScmResourceGroup(group: any): group is SourceControlResourceGroup {
	if (group == null) return false;

	return (
		(group as SourceControlResourceGroup).id != null &&
		(group as SourceControlResourceGroup).label != null &&
		(group as SourceControlResourceGroup).resourceStates != null &&
		Array.isArray((group as SourceControlResourceGroup).resourceStates)
	);
}

function isScmResourceState(resource: any): resource is SourceControlResourceState {
	if (resource == null) return false;

	return (resource as SourceControlResourceState).resourceUri != null;
}

function isTimelineItem(item: any): item is TimelineItem {
	if (item == null) return false;

	return (item as TimelineItem).timestamp != null && (item as TimelineItem).label != null;
}

function isGitTimelineItem(item: any): item is GitTimelineItem {
	if (item == null) return false;

	return (
		isTimelineItem(item) &&
		(item as GitTimelineItem).ref != null &&
		(item as GitTimelineItem).previousRef != null &&
		(item as GitTimelineItem).message != null
	);
}

export abstract class Command implements Disposable {
	static getMarkdownCommandArgsCore<T>(
		command: Commands | `${Commands.ActionPrefix}${ActionContext['type']}`,
		args: T,
	): string {
		return `command:${command}?${encodeURIComponent(JSON.stringify(args))}`;
	}

	protected readonly contextParsingOptions: CommandContextParsingOptions = { expectsEditor: false };

	private readonly _disposable: Disposable;

	constructor(command: Commands | Commands[]) {
		if (typeof command === 'string') {
			this._disposable = commands.registerCommand(
				command,
				(...args: any[]) => this._execute(command, ...args),
				this,
			);

			return;
		}

		const subscriptions = command.map(cmd =>
			commands.registerCommand(cmd, (...args: any[]) => this._execute(cmd, ...args), this),
		);
		this._disposable = Disposable.from(...subscriptions);
	}

	dispose() {
		this._disposable.dispose();
	}

	protected preExecute(context: CommandContext, ...args: any[]): Promise<any> {
		return this.execute(...args);
	}

	abstract execute(...args: any[]): any;

	protected _execute(command: string, ...args: any[]): any {
		const [context, rest] = Command.parseContext(command, { ...this.contextParsingOptions }, ...args);
		return this.preExecute(context, ...rest);
	}

	private static parseContext(
		command: string,
		options: CommandContextParsingOptions,
		...args: any[]
	): [CommandContext, any[]] {
		let editor: TextEditor | undefined = undefined;

		let firstArg = args[0];

		if (options.expectsEditor) {
			if (firstArg == null || (firstArg.id != null && firstArg.document?.uri != null)) {
				editor = firstArg;
				args = args.slice(1);
				firstArg = args[0];
			}

			if (args.length > 0 && (firstArg == null || firstArg instanceof Uri)) {
				const [uri, ...rest] = args as [Uri, any];
				if (uri != null) {
					// If the uri matches the active editor (or we are in a left-hand side of a diff), then pass the active editor
					if (
						editor == null &&
						(uri.toString() === window.activeTextEditor?.document.uri.toString() ||
							command.endsWith('InDiffLeft'))
					) {
						editor = window.activeTextEditor;
					}

					const uris = rest[0];
					if (uris != null && Array.isArray(uris) && uris.length !== 0 && uris[0] instanceof Uri) {
						return [
							{ command: command, type: 'uris', editor: editor, uri: uri, uris: uris },
							rest.slice(1),
						];
					}
					return [{ command: command, type: 'uri', editor: editor, uri: uri }, rest];
				}

				args = args.slice(1);
			} else if (editor == null) {
				// If we are expecting an editor and we have no uri, then pass the active editor
				editor = window.activeTextEditor;
			}
		}

		if (firstArg instanceof ViewNode) {
			const [node, ...rest] = args as [ViewNode, any];
			return [{ command: command, type: 'viewItem', node: node, uri: node.uri }, rest];
		}

		if (isScmResourceState(firstArg)) {
			const states = [];
			let count = 0;
			for (const arg of args) {
				if (!isScmResourceState(arg)) break;

				count++;
				states.push(arg);
			}

			return [
				{ command: command, type: 'scm-states', scmResourceStates: states, uri: states[0].resourceUri },
				args.slice(count),
			];
		}

		if (isScmResourceGroup(firstArg)) {
			const groups = [];
			let count = 0;
			for (const arg of args) {
				if (!isScmResourceGroup(arg)) break;

				count++;
				groups.push(arg);
			}

			return [{ command: command, type: 'scm-groups', scmResourceGroups: groups }, args.slice(count)];
		}

		if (isGitTimelineItem(firstArg)) {
			const [item, uri, ...rest] = args as [GitTimelineItem, Uri, any];
			return [{ command: command, type: 'timeline-item:git', item: item, uri: uri }, rest];
		}

		return [{ command: command, type: 'unknown', editor: editor, uri: editor?.document.uri }, args];
	}
}

export abstract class ActiveEditorCommand extends Command {
	protected override readonly contextParsingOptions: CommandContextParsingOptions = { expectsEditor: true };

	constructor(command: Commands | Commands[]) {
		super(command);
	}

	protected override preExecute(context: CommandContext, ...args: any[]): Promise<any> {
		return this.execute(context.editor, context.uri, ...args);
	}

	protected override _execute(command: string, ...args: any[]): any {
		return super._execute(command, undefined, ...args);
	}

	abstract override execute(editor?: TextEditor, ...args: any[]): any;
}

let lastCommand: { command: string; args: any[] } | undefined = undefined;
export function getLastCommand() {
	return lastCommand;
}

export abstract class ActiveEditorCachedCommand extends ActiveEditorCommand {
	constructor(command: Commands | Commands[]) {
		super(command);
	}

	protected override _execute(command: string, ...args: any[]): any {
		lastCommand = {
			command: command,
			args: args,
		};
		return super._execute(command, ...args);
	}

	abstract override execute(editor: TextEditor, ...args: any[]): any;
}

export abstract class EditorCommand implements Disposable {
	private readonly _disposable: Disposable;

	constructor(command: Commands | Commands[]) {
		if (!Array.isArray(command)) {
			command = [command];
		}

		const subscriptions = [];
		for (const cmd of command) {
			subscriptions.push(
				commands.registerTextEditorCommand(
					cmd,
					(editor: TextEditor, edit: TextEditorEdit, ...args: any[]) =>
						this.executeCore(cmd, editor, edit, ...args),
					this,
				),
			);
		}
		this._disposable = Disposable.from(...subscriptions);
	}

	dispose() {
		this._disposable.dispose();
	}

	private executeCore(command: string, editor: TextEditor, edit: TextEditorEdit, ...args: any[]): any {
		return this.execute(editor, edit, ...args);
	}

	abstract execute(editor: TextEditor, edit: TextEditorEdit, ...args: any[]): any;
}

export function findEditor(uri: Uri): TextEditor | undefined {
	const active = window.activeTextEditor;
	const normalizedUri = uri.toString();

	for (const e of [...(active != null ? [active] : []), ...window.visibleTextEditors]) {
		// Don't include diff editors
		if (e.document.uri.toString() === normalizedUri && e?.viewColumn != null) {
			return e;
		}
	}

	return undefined;
}

export async function findOrOpenEditor(
	uri: Uri,
	options?: TextDocumentShowOptions & { throwOnError?: boolean },
): Promise<TextEditor | undefined> {
	const e = findEditor(uri);
	if (e != null) {
		if (!options?.preserveFocus) {
			await window.showTextDocument(e.document, { ...options, viewColumn: e.viewColumn });
		}

		return e;
	}

	return openEditor(uri, { viewColumn: window.activeTextEditor?.viewColumn, ...options });
}

export function findOrOpenEditors(uris: Uri[]): void {
	const normalizedUris = new Map(uris.map(uri => [uri.toString(), uri]));

	for (const e of window.visibleTextEditors) {
		// Don't include diff editors
		if (e?.viewColumn != null) {
			normalizedUris.delete(e.document.uri.toString());
		}
	}

	for (const uri of normalizedUris.values()) {
		void commands.executeCommand(BuiltInCommands.Open, uri, { background: true, preview: false });
	}
}

export async function openEditor(
	uri: Uri,
	options: TextDocumentShowOptions & { rethrow?: boolean } = {},
): Promise<TextEditor | undefined> {
	const { rethrow, ...opts } = options;
	try {
		if (GitUri.is(uri)) {
			uri = uri.documentUri();
		}

		if (uri.scheme === DocumentSchemes.GitClassic && ImageMimetypes[paths.extname(uri.fsPath)]) {
			await commands.executeCommand(BuiltInCommands.Open, uri);

			return undefined;
		}

		const document = await workspace.openTextDocument(uri);
		return window.showTextDocument(document, {
			preserveFocus: false,
			preview: true,
			viewColumn: ViewColumn.Active,
			...opts,
		});
	} catch (ex) {
		const msg: string = ex?.toString() ?? '';
		if (msg.includes('File seems to be binary and cannot be opened as text')) {
			await commands.executeCommand(BuiltInCommands.Open, uri);

			return undefined;
		}

		if (rethrow) throw ex;

		Logger.error(ex, 'openEditor');
		return undefined;
	}
}

export enum OpenWorkspaceLocation {
	CurrentWindow = 'currentWindow',
	NewWindow = 'newWindow',
	AddToWorkspace = 'addToWorkspace',
}

export function openWorkspace(
	uri: Uri,
	options: { location?: OpenWorkspaceLocation; name?: string } = { location: OpenWorkspaceLocation.CurrentWindow },
): void {
	if (options?.location === OpenWorkspaceLocation.AddToWorkspace) {
		const count = workspace.workspaceFolders?.length ?? 0;
		return void workspace.updateWorkspaceFolders(count, 0, { uri: uri, name: options?.name });
	}

	return void commands.executeCommand(BuiltInCommands.OpenFolder, uri, {
		forceNewWindow: options?.location === OpenWorkspaceLocation.NewWindow,
	});
}
