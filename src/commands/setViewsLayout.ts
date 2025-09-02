'use strict';
import { commands, window } from 'vscode';
import { viewsConfigKeys } from '../configuration';
import { command, Command, Commands } from './common';

enum ViewsLayout {
	GitClassic = 'gitclassic',
	SourceControl = 'scm',
}

export interface SetViewsLayoutCommandArgs {
	layout: ViewsLayout;
}

@command()
export class SetViewsLayoutCommand extends Command {
	constructor() {
		super(Commands.SetViewsLayout);
	}

	async execute(args?: SetViewsLayoutCommandArgs) {
		let layout = args?.layout;
		if (layout == null) {
			const pick = await window.showQuickPick(
				[
					{
						label: 'Source Control Layout',
						description: '(default)',
						detail: 'Shows all the views together on the Source Control side bar',
						layout: ViewsLayout.SourceControl,
					},
					{
						label: 'GitClassic Layout',
						description: '',
						detail: 'Shows all the views together on the GitClassic side bar',
						layout: ViewsLayout.GitClassic,
					},
				],
				{
					placeHolder: 'Choose a GitClassic views layout',
				},
			);
			if (pick == null) return;

			layout = pick.layout;
		}

		switch (layout) {
			case ViewsLayout.GitClassic:
				try {
					// Because of https://github.com/microsoft/vscode/issues/105774, run the command twice which seems to fix things
					let count = 0;
					while (count++ < 2) {
						void (await commands.executeCommand('vscode.moveViews', {
							viewIds: viewsConfigKeys.map(view => `gitclassic.views.${view}`),
							destinationId: 'workbench.view.extension.gitclassic',
						}));
					}
				} catch {}

				break;
			case ViewsLayout.SourceControl:
				try {
					// Because of https://github.com/microsoft/vscode/issues/105774, run the command twice which seems to fix things
					let count = 0;
					while (count++ < 2) {
						void (await commands.executeCommand('vscode.moveViews', {
							viewIds: viewsConfigKeys.map(view => `gitclassic.views.${view}`),
							destinationId: 'workbench.view.scm',
						}));
					}
				} catch {
					for (const view of viewsConfigKeys) {
						void (await commands.executeCommand(`gitclassic.views.${view}.resetViewLocation`));
					}
				}

				break;
		}
	}
}
