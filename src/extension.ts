// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
const opn = require("opn");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "share" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let phpnet = vscode.commands.registerCommand("extension.phpnet", () => {
    // The code you place here will be executed every time your command is executed
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      return; // No open text editor
    }

    let selection = editor.selection;
    let text = editor.document.getText(selection);
    // Display a message box to the user
    const phpurl = "https://www.php.net/";
    const url =
      phpurl + "manual-lookup.php?pattern=" + text + "&scope=quickref";

    opn(url);

    vscode.window.showInformationMessage("Success Open Phpnet!");
  });

  let stackoverflow = vscode.commands.registerCommand(
    "extension.stackoverflow",
    () => {
      // The code you place here will be executed every time your command is executed
      let editor = vscode.window.activeTextEditor;
      if (!editor) {
        return; // No open text editor
      }

      let selection = editor.selection;
      let text = editor.document.getText(selection);
      // Display a message box to the user
      const stackoverflow = "https://stackoverflow.com/";
      const url = stackoverflow + "/search?q=%5Bphp%5D+" + text;

      opn(url);

      vscode.window.showInformationMessage("Success Open stackoverflow!");
    }
  );

  context.subscriptions.push(phpnet);
  context.subscriptions.push(stackoverflow);
}

// this method is called when your extension is deactivated
export function deactivate() {}
