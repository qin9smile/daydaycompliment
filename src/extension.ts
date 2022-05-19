import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "daydaycompliment" is now active!');
  const disposable = vscode.commands.registerCommand('extension.dayDayCompliment', () => {
		vscode.window.showInformationMessage('You are a good guy!');
	});

	context.subscriptions.push(disposable);
}
