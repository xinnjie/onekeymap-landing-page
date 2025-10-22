---
title: "VSCode Actions Reference"
description: "A comprehensive list of Visual Studio Code actions and their default keybindings. Search and find any action to improve your productivity."
keywords: "vscode, actions, keybindings, shortcuts, reference, productivity"
---

# Visual Studio Code Actions Reference

<!--
**Note:** This document is automatically generated. Do not edit it directly.
This document is generated from a JSON file extracted from VSCode by [Github Actions](https://github.com/xinnjie/vscode-extract-actions-metadata/blob/f0c0232eb213ac3547b1e42ebf653c4309798a2f/.github/workflows/extract-actions.yml).
Process details are described in [EXTRACT_ACTIONS_README.md](https://github.com/xinnjie/vscode-extract-actions-metadata/blob/f0c0232eb213ac3547b1e42ebf653c4309798a2f/EXTRACT_ACTIONS_README.md#L10).
To update this document, please modify the script [vscode-actions-to-md.sh](https://github.com/xinnjie/onekeymap-page/blob/main/script/vscode-actions-to-md.sh) or the source JSON file and regenerate it.
-->

This document provides a comprehensive list of Visual Studio Code actions and their default keybindings, extracted directly from the application's configuration. Use this page to find and learn new shortcuts to speed up your development workflow.

## Accessible Diff Viewer

### Go to Next Difference

ID: `editor.action.accessibleDiffViewer.next`

Precondition: `isInDiffEditor`

Default Keybinding:

- Windows: `F7`
- Linux: `F7`
- macOS: `F7`

---

### Go to Previous Difference

ID: `editor.action.accessibleDiffViewer.prev`

Precondition: `isInDiffEditor`

Default Keybinding:

- Windows: `Shift+F7`
- Linux: `Shift+F7`
- macOS: `Shift+F7`

## Accounts

### Manage Trusted Extensions For Account

ID: `_manageTrustedExtensionsForAccount`

---

### Manage Extension Account Preferences

ID: `_manageAccountPreferencesForExtension`

---

### Manage Trusted MCP Servers For Account

ID: `_manageTrustedMCPServersForAccount`

---

### Manage MCP Server Account Preferences

ID: `_manageAccountPreferencesForMcpServer`

## Authentication

### Remove Dynamic Authentication Providers

ID: `workbench.action.removeDynamicAuthenticationProviders`

## Chat

### Chat History

ID: `workbench.action.chat.toggleChatHistoryVisibility`

Precondition: `chatIsEnabled`

---

### Configure Empty State

ID: `workbench.action.chat.openChatEmptyStateSettings`

Precondition: `chatIsEnabled`

---

### Open Changes in Diff Editor

ID: `chatEditing.openFileInDiff`

---

### Keep

ID: `chatEditing.acceptFile`

---

### Undo

ID: `chatEditing.discardFile`

---

### Keep

ID: `chatEditing.acceptAllFiles`

Precondition: `hasUndecidedChatEditingResource`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `hasUndecidedChatEditingResource && inChatInput`

---

### Undo

ID: `chatEditing.discardAllFiles`

Precondition: `hasUndecidedChatEditingResource`

Default Keybinding:

- Windows: `Ctrl+Backspace`
- Linux: `Ctrl+Backspace`
- macOS: `Cmd+Backspace`

When: `hasUndecidedChatEditingResource && inChatInput && !chatInputHasText`

---

### View All Edits

ID: `chatEditing.viewChanges`

Precondition: `hasUndecidedChatEditingResource`

---

### Undo Requests

ID: `workbench.action.chat.undoEdits`

Default Keybinding:

- Windows: `Delete`
- Linux: `Delete`
- macOS: `Cmd+Backspace`

When: `inChat && !textInputFocus`

---

### Restore Checkpoint

ID: `workbench.action.chat.restoreCheckpoint`

Default Keybinding:

- Windows: `Delete`
- Linux: `Delete`
- macOS: `Cmd+Backspace`

When: `inChat && !textInputFocus`

---

### Restore to Last Checkpoint

ID: `workbench.action.chat.restoreLastCheckpoint`

---

### Edit Request

ID: `workbench.action.chat.editRequests`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `inChat && !textInputFocus`

---

### Add Files From References

ID: `workbench.action.edits.addFilesFromReferences`

---

### View Previous Edits

ID: `chatEditing.viewPreviousEdits`

Precondition: `chatIsEnabled && !hasUndecidedChatEditingResource`

---

### Open Chat

ID: `workbench.action.chat.open`

Precondition: `!chatSetupDisabled && !chatSetupHidden`

Default Keybinding:

- Windows: `Ctrl+Alt+I`
- Linux: `Ctrl+Alt+I`
- macOS: `Ctrl+Cmd+I`

---

### Open Chat (Ask)

ID: `workbench.action.chat.openask`

Precondition: `!chatSetupDisabled && !chatSetupHidden`

---

### Open Chat (Agent)

ID: `workbench.action.chat.openagent`

Precondition: `!chatSetupDisabled && !chatSetupHidden`

Default Keybinding:

- Windows: `Ctrl+Shift+I`
- Linux: `Ctrl+Shift+Alt+I`
- macOS: `Shift+Cmd+I`

When: `config.chat.agent.enabled`

---

### Open Chat (Edit)

ID: `workbench.action.chat.openedit`

Precondition: `!chatSetupDisabled && !chatSetupHidden`

---

### Toggle Chat

ID: `workbench.action.chat.toggle`

---

### Show Chats...

ID: `workbench.action.chat.history`

Precondition: `chatIsEnabled`

---

### New Chat Editor

ID: `workbench.action.openChat`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+N`
- Linux: `Ctrl+N`
- macOS: `Cmd+N`

When: `inChat && inChatEditor`

---

### New Chat Window

ID: `workbench.action.newChatWindow`

Precondition: `chatIsEnabled`

---

### Open New Chat in New Window

ID: `workbench.action.chat.newChatInNewWindow`

Precondition: `chatIsEnabled`

---

### Open New Chat in Side Bar

ID: `workbench.action.chat.newChatInSideBar`

Precondition: `chatIsEnabled`

---

### Open New Chat Editor to the Side

ID: `workbench.action.chat.openNewChatToTheSide`

Precondition: `chatIsEnabled`

---

### Chat with Extension

ID: `workbench.action.chat.addParticipant`

---

### Clear Input History

ID: `workbench.action.chat.clearInputHistory`

Precondition: `chatIsEnabled`

---

### Clear All Workspace Chats

ID: `workbench.action.chat.clearHistory`

Precondition: `chatIsEnabled`

---

### Focus Chat List

ID: `chat.action.focus`

Precondition: `inChatInput`

Default Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow`

When: `chatCursorAtTop && !quickChatHasFocus`

---

### Focus Last Focused Chat List Item

ID: `workbench.chat.action.focusLastFocused`

Precondition: `inChatInput`

Default Keybinding:

- Windows: `Ctrl+Shift+UpArrow`
- Linux: `Ctrl+Shift+UpArrow`
- macOS: `Shift+Cmd+UpArrow`

When: `chatCursorAtTop && !quickChatHasFocus`

---

### Manage Chat

ID: `workbench.action.chat.manageSettings`

Precondition: `chatIsEnabled && chatPlanFree && config..authProvider != '' || chatIsEnabled && chatPlanPro && config..authProvider != '' || chatIsEnabled && chatPlanProPlus && config..authProvider != ''`

---

### Reset Tool Confirmations

ID: `workbench.action.chat.resetTrustedTools`

Precondition: `chatIsEnabled`

---

### Generate Workspace Instructions File

ID: `workbench.action.chat.generateInstructions`

Precondition: `chatIsEnabled`

---

### Chat Settings

ID: `workbench.action.chat.openFeatureSettings`

Precondition: `chatIsEnabled`

---

### Focus Chat Confirmation

ID: `workbench.action.chat.focusConfirmation`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Shift+A`
- Linux: `Ctrl+Shift+A`
- macOS: `Shift+Cmd+A`

When: `accessibilityModeEnabled`

---

### Copy All

ID: `workbench.action.chat.copyAll`

---

### Copy

ID: `workbench.action.chat.copyItem`

---

### Copy Math Source

ID: `workbench.action.chat.copyKatexMathSource`

---

### Copy

ID: `workbench.action.chat.copyCodeBlock`

---

### Apply in Editor

ID: `workbench.action.chat.applyInEditor`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Ctrl+Enter`

When: `accessibleViewInCodeBlock || inChat && !inChatInput`

---

### Insert At Cursor

ID: `workbench.action.chat.insertCodeBlock`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Ctrl+Enter`

When: `accessibleViewInCodeBlock || inChat && !inChatInput`

---

### Insert into New File

ID: `workbench.action.chat.insertIntoNewFile`

Precondition: `chatIsEnabled`

---

### Insert into Terminal

ID: `workbench.action.chat.runInTerminal`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Alt+Enter`
- Linux: `Ctrl+Alt+Enter`
- macOS: `Ctrl+Alt+Enter`

When: `accessibleViewInCodeBlock || inChat`

---

### Next Code Block

ID: `workbench.action.chat.nextCodeBlock`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Alt+PageDown`
- Linux: `Ctrl+Alt+PageDown`
- macOS: `Alt+Cmd+PageDown`

When: `inChat`

---

### Previous Code Block

ID: `workbench.action.chat.previousCodeBlock`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Alt+PageUp`
- Linux: `Ctrl+Alt+PageUp`
- macOS: `Alt+Cmd+PageUp`

When: `inChat`

---

### Apply Edits

ID: `workbench.action.chat.applyCompareEdits`

Precondition: `diffEditorHasChanges && !chatEditApplied`

---

### Discard Edits

ID: `workbench.action.chat.discardCompareEdits`

Precondition: `diffEditorHasChanges && !chatEditApplied`

---

### Next File Tree

ID: `workbench.action.chat.nextFileTree`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+F9`
- Linux: `Ctrl+F9`
- macOS: `Cmd+F9`

When: `inChat`

---

### Previous File Tree

ID: `workbench.action.chat.previousFileTree`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Shift+F9`
- Linux: `Ctrl+Shift+F9`
- macOS: `Shift+Cmd+F9`

When: `inChat`

---

### Next User Prompt

ID: `workbench.action.chat.nextUserPrompt`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Alt+DownArrow`
- Linux: `Ctrl+Alt+DownArrow`
- macOS: `Alt+Cmd+DownArrow`

When: `inChat`

---

### Previous User Prompt

ID: `workbench.action.chat.previousUserPrompt`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Alt+UpArrow`
- Linux: `Ctrl+Alt+UpArrow`
- macOS: `Alt+Cmd+UpArrow`

When: `inChat`

---

### Helpful

ID: `workbench.action.chat.markHelpful`

---

### Unhelpful

ID: `workbench.action.chat.markUnhelpful`

---

### Report Issue

ID: `workbench.action.chat.reportIssueForBug`

---

### Retry

ID: `workbench.action.chat.retry`

---

### Insert into Notebook

ID: `workbench.action.chat.insertIntoNotebook`

---

### Send and Dispatch

ID: `workbench.action.chat.submit`

Precondition: `chatInputHasText && !chatSessionRequestInProgress`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `inChatInput && !withinEditSessionDiff`

---

### Send to Edit Session

ID: `workbench.action.chat.delegateToEditSession`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `inChatInput && withinEditSessionDiff`

---

### Send

ID: `workbench.action.edits.submit`

Precondition: `chatInputHasText && !chatSessionRequestInProgress`

---

### Send

ID: `workbench.action.chat.submitWithoutDispatching`

Precondition: `chatInputHasText && !chatSessionRequestInProgress && chatMode == 'ask' || chatPromptFileAttached && !chatSessionRequestInProgress && chatMode == 'ask'`

Default Keybinding:

- Windows: `Shift+Alt+Enter`
- Linux: `Shift+Alt+Enter`
- macOS: `Shift+Alt+Enter`

When: `inChatInput`

---

### Cancel

ID: `workbench.action.chat.cancel`

Default Keybinding:

- Windows: `Alt+Backspace`
- Linux: `Ctrl+Escape`
- macOS: `Cmd+Escape`

---

### Send to New Chat

ID: `workbench.action.chat.sendToNewChat`

Precondition: `chatInputHasText && !chatSessionRequestInProgress || chatPromptFileAttached && !chatSessionRequestInProgress`

Default Keybinding:

- Windows: `Ctrl+Shift+Enter`
- Linux: `Ctrl+Shift+Enter`
- macOS: `Shift+Cmd+Enter`

When: `inChatInput`

---

### Switch to Next Chat Mode

ID: `workbench.action.chat.toggleAgentMode`

Precondition: `chatIsEnabled && !chatSessionRequestInProgress`

---

### Switch to Next Model

ID: `workbench.action.chat.switchToNextModel`

Precondition: `chatIsEnabled`

---

### Open Model Picker

ID: `workbench.action.chat.openModelPicker`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Alt+.`
- Linux: `Ctrl+Alt+.`
- macOS: `Alt+Cmd+.`

When: `inChatInput`

---

### Open Mode Picker

ID: `workbench.action.chat.openModePicker`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+.`
- Linux: `Ctrl+.`
- macOS: `Cmd+.`

When: `inChatInput && chatLocation == 'panel'`

---

### Open Model Picker

ID: `workbench.action.chat.chatSessionOpenModelPicker`

Precondition: `chatIsEnabled`

---

### Change Model

ID: `workbench.action.chat.changeModel`

Precondition: `chatIsEnabled`

---

### Cancel Edit

ID: `workbench.edit.chat.cancel`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `chatSessionCurrentlyEditing && inChatInput && !editorHasMultipleSelections && !editorHasSelection && !editorHoverVisible || chatSessionCurrentlyEditingInput && inChatInput && !editorHasMultipleSelections && !editorHasSelection && !editorHoverVisible`

---

### Open Quick Chat

ID: `workbench.action.quickchat.toggle`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+Shift+Alt+L`
- Linux: `Ctrl+Shift+Alt+L`
- macOS: `Shift+Alt+Cmd+L`

---

### Open Quick Chat

ID: `workbench.action.openQuickChat`

Precondition: `chatIsEnabled`

---

### Open in Chat View

ID: `workbench.action.quickchat.openInChatView`

---

### Close Quick Chat

ID: `workbench.action.quickchat.close`

---

### Export Chat...

ID: `workbench.action.chat.export`

Precondition: `chatIsEnabled`

---

### Import Chat...

ID: `workbench.action.chat.import`

Precondition: `chatIsEnabled`

---

### Move Chat into Editor Area

ID: `workbench.action.chat.openInEditor`

Precondition: `chatIsEnabled`

---

### Move Chat into New Window

ID: `workbench.action.chat.openInNewWindow`

Precondition: `chatIsEnabled`

---

### Move Chat into Side Bar

ID: `workbench.action.chat.openInSidebar`

Precondition: `chatIsEnabled`

---

### New Chat

ID: `workbench.action.chat.newChat`

Precondition: `chatIsEnabled`

Default Keybinding:

- Windows: `Ctrl+N`
- Linux: `Ctrl+N`
- macOS: `Cmd+N`

Secondary Keybinding:

- Windows: `Ctrl+L`
- Linux: `Ctrl+L`
- macOS: `Ctrl+L`

When: `inChat`

---

### Undo Last Request

ID: `workbench.action.chat.undoEdit`

Precondition: `chatEditingCanUndo && chatIsEnabled`

---

### Redo Last Request

ID: `workbench.action.chat.redoEdit`

Precondition: `chatEditingCanRedo && chatIsEnabled`

---

### Redo

ID: `workbench.action.chat.redoEdit2`

Precondition: `chatEditingCanRedo && chatIsEnabled`

---

### Add Context...

ID: `workbench.action.chat.attachContext`

Default Keybinding:

- Windows: `Ctrl+/`
- Linux: `Ctrl+/`
- macOS: `Cmd+/`

When: `inChatInput && chatLocation == 'panel'`

---

### Add File to Chat

ID: `workbench.action.chat.attachFile`

Precondition: `chatIsEnabled`

---

### Add Folder to Chat

ID: `workbench.action.chat.attachFolder`

---

### Add Selection to Chat

ID: `workbench.action.chat.attachSelection`

Precondition: `chatIsEnabled`

---

### Add Search Results to Chat

ID: `workbench.action.chat.insertSearchResults`

---

### Run Prompt In New Chat

ID: `workbench.action.chat.run-in-new-chat.prompt.current`

Precondition: `chatIsEnabled && config.chat.promptFiles`

Default Keybinding:

- Windows: `Ctrl+Alt+Win+/`
- Linux: `Ctrl+Alt+Win+/`
- macOS: `Ctrl+Alt+Cmd+/`

When: `chatIsEnabled && config.chat.promptFiles && editorTextFocus && resourceSet && resourceLangId == 'prompt'`

---

### Run Prompt in Current Chat

ID: `workbench.action.chat.run.prompt.current`

Precondition: `chatIsEnabled && config.chat.promptFiles`

Default Keybinding:

- Windows: `Alt+Win+/`
- Linux: `Alt+Win+/`
- macOS: `Ctrl+Alt+/`

When: `chatIsEnabled && config.chat.promptFiles && editorTextFocus && resourceSet && resourceLangId == 'prompt'`

---

### Run Prompt...

ID: `workbench.action.chat.run.prompt`

Precondition: `chatIsEnabled && config.chat.promptFiles`

Default Keybinding:

- Windows: `Alt+Win+/`
- Linux: `Alt+Win+/`
- macOS: `Ctrl+Alt+/`

When: `chatIsEnabled && config.chat.promptFiles`

---

### Configure Prompt Files...

ID: `workbench.action.chat.configure.prompts`

Precondition: `chatIsEnabled && config.chat.promptFiles`

---

### Attach Instructions...

ID: `workbench.action.chat.attach.instructions`

Precondition: `chatIsEnabled && config.chat.promptFiles`

Default Keybinding:

- Windows: `Ctrl+Alt+/`
- Linux: `Ctrl+Alt+/`
- macOS: `Alt+Cmd+/`

---

### Configure Instructions...

ID: `workbench.action.chat.configure.instructions`

Precondition: `chatIsEnabled && config.chat.promptFiles`

---

### Save chat session to a prompt file

ID: `workbench.action.chat.save-to-prompt`

Precondition: `chatIsEnabled && config.chat.promptFiles`

---

### Configure Chat Modes...

ID: `workbench.action.chat.manage.mode`

Precondition: `chatIsEnabled && config.chat.promptFiles`

---

### Configure Modes...

ID: `workbench.action.chat.picker.configmode`

---

### New Prompt File...

ID: `workbench.command.new.prompt`

Precondition: `chatIsEnabled && config.chat.promptFiles`

---

### New Instructions File...

ID: `workbench.command.new.instructions`

Precondition: `chatIsEnabled && config.chat.promptFiles`

---

### New Mode File...

ID: `workbench.command.new.mode`

Precondition: `chatIsEnabled && config.chat.promptFiles`

---

### New Untitled Prompt File

ID: `workbench.command.new.untitled.prompt`

Precondition: `chatIsEnabled && config.chat.promptFiles`

---

### Go to Next Chat Edit

ID: `chatEditor.action.navigateNext`

Precondition: `chatEdits.hasEditorModifications && chatIsEnabled`

Default Keybinding:

- Windows: `Alt+F5`
- Linux: `Alt+F5`
- macOS: `Alt+F5`

When: `chatEdits.hasEditorModifications && editorFocus || chatEdits.hasEditorModifications && notebookCellListFocused`

---

### Go to Previous Chat Edit

ID: `chatEditor.action.navigatePrevious`

Precondition: `chatEdits.hasEditorModifications && chatIsEnabled`

Default Keybinding:

- Windows: `Shift+Alt+F5`
- Linux: `Shift+Alt+F5`
- macOS: `Shift+Alt+F5`

When: `chatEdits.hasEditorModifications && editorFocus || chatEdits.hasEditorModifications && notebookCellListFocused`

---

### Review

ID: `chatEditor.action.reviewChanges`

Precondition: `chatEdits.hasEditorModifications && !chatEdits.isCurrentlyBeingModified`

---

### Keep Chat Edits

ID: `chatEditor.action.accept`

Precondition: `chatEdits.hasEditorModifications && !chatEdits.isCurrentlyBeingModified`

Default Keybinding:

- Windows: `Ctrl+Shift+Y`
- Linux: `Ctrl+Shift+Y`
- macOS: `Shift+Cmd+Y`

When: `editorFocus || notebookEditorFocused`

---

### Undo Chat Edits

ID: `chatEditor.action.reject`

Precondition: `chatEdits.hasEditorModifications && !chatEdits.isCurrentlyBeingModified`

Default Keybinding:

- Windows: `Ctrl+Shift+N`
- Linux: `Ctrl+Shift+N`
- macOS: `Shift+Cmd+N`

When: `editorFocus || notebookEditorFocused`

---

### Keep All Chat Edits

ID: `chatEditor.action.acceptAllEdits`

Precondition: `chatEdits.hasEditorModifications && !chatEdits.isCurrentlyBeingModified`

Default Keybinding:

- Windows: `Ctrl+Alt+Y`
- Linux: `Ctrl+Alt+Y`
- macOS: `Alt+Cmd+Y`

When: `editorFocus || notebookEditorFocused`

---

### Keep this Change

ID: `chatEditor.action.acceptHunk`

Precondition: `chatEdits.hasEditorModifications && !chatEdits.isCurrentlyBeingModified`

Default Keybinding:

- Windows: `Ctrl+Y`
- Linux: `Ctrl+Y`
- macOS: `Cmd+Y`

When: `editorFocus || notebookCellListFocused`

---

### Undo this Change

ID: `chatEditor.action.undoHunk`

Precondition: `chatEdits.hasEditorModifications && !chatEdits.isCurrentlyBeingModified`

Default Keybinding:

- Windows: `Ctrl+N`
- Linux: `Ctrl+N`
- macOS: `Cmd+N`

When: `editorFocus || notebookCellListFocused`

---

### Toggle Diff Editor for Chat Edits

ID: `chatEditor.action.toggleDiff`

Precondition: `chatEdits.hasEditorModifications`

Default Keybinding:

- Windows: `Shift+Alt+F7`
- Linux: `Shift+Alt+F7`
- macOS: `Shift+Alt+F7`

When: `editorFocus`

---

### Show Accessible Diff View for Chat Edits

ID: `chatEditor.action.showAccessibleDiffView`

Precondition: `chatEdits.hasEditorModifications && !chatEdits.isCurrentlyBeingModified`

Default Keybinding:

- Windows: `F7`
- Linux: `F7`
- macOS: `F7`

When: `editorFocus`

---

### Accept

ID: `workbench.action.chat.acceptTool`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `chatHasToolConfirmation && inChat`

---

### Skip

ID: `workbench.action.chat.skipTool`

Default Keybinding:

- Windows: `Ctrl+Alt+Enter`
- Linux: `Ctrl+Alt+Enter`
- macOS: `Alt+Cmd+Enter`

When: `chatHasToolConfirmation && inChat`

---

### Configure Tools...

ID: `workbench.action.chat.configureTools`

Precondition: `chatMode == 'agent'`

---

### Manage Language Model Access...

ID: `workbench.action.chat.manageLanguageModelAuthentication`

Precondition: `chatIsEnabled`

---

### Manage Language Models...

ID: `workbench.action.chat.manageLanguageModels`

Precondition: `chatEntitlementInternal && chatIsEnabled || chatIsEnabled && chatPlanFree || chatIsEnabled && chatPlanPro || chatIsEnabled && chatPlanProPlus`

---

### Configure Tool Sets...

ID: `chat.configureToolSets`

Precondition: `chatIsEnabled && toolsCount > 0`

---

### Rename

ID: `workbench.action.chat.renameSession`

Default Keybinding:

- Windows: `F2`
- Linux: `F2`
- macOS: `F2`

When: `focusedView == 'workbench.view.chat.sessions.local'`

---

### Delete

ID: `workbench.action.chat.deleteSession`

---

### Move Chat into New Window

ID: `workbench.action.chat.openSessionInNewWindow`

---

### Move Chat to the Side

ID: `workbench.action.chat.openSessionInNewEditorGroup`

---

### Move Chat into Side Bar

ID: `workbench.action.chat.openSessionInSidebar`

---

### Show Rich Descriptions

ID: `workbench.action.chatSessions.toggleDescriptionDisplay`

---

### Start Voice Chat

ID: `workbench.action.chat.startVoiceChat`

Precondition: `chatIsEnabled && hasSpeechProvider && !chatSessionRequestInProgress && !scopedVoiceChatGettingReady && !speechToTextInProgress`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `inChatInput && !editorFocus && !notebookEditorFocused || inlineChatFocused && !editorFocus && !notebookEditorFocused`

---

### Voice Chat in Chat View

ID: `workbench.action.chat.voiceChatInChatView`

Precondition: `chatIsEnabled && hasSpeechProvider && !chatSessionRequestInProgress`

---

### Quick Voice Chat

ID: `workbench.action.chat.quickVoiceChat`

Precondition: `chatIsEnabled && hasSpeechProvider && !chatSessionRequestInProgress`

---

### Inline Voice Chat

ID: `workbench.action.chat.inlineVoiceChat`

Precondition: `activeEditor && chatIsEnabled && hasSpeechProvider && !chatSessionRequestInProgress`

---

### Stop Listening

ID: `workbench.action.chat.stopListening`

Precondition: `voiceChatInProgress`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `scopedVoiceChatInProgress == 'editor' || scopedVoiceChatInProgress == 'inline' || scopedVoiceChatInProgress == 'quick' || scopedVoiceChatInProgress == 'view'`

---

### Stop Listening and Submit

ID: `workbench.action.chat.stopListeningAndSubmit`

Precondition: `voiceChatInProgress`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `inChatInput && scopedVoiceChatInProgress == 'editor' || inChatInput && scopedVoiceChatInProgress == 'inline' || inChatInput && scopedVoiceChatInProgress == 'quick' || inChatInput && scopedVoiceChatInProgress == 'view' || inlineChatFocused && scopedVoiceChatInProgress == 'editor' || inlineChatFocused && scopedVoiceChatInProgress == 'inline' || inlineChatFocused && scopedVoiceChatInProgress == 'quick' || inlineChatFocused && scopedVoiceChatInProgress == 'view'`

---

### Stop Reading Aloud

ID: `workbench.action.speech.stopReadAloud`

Precondition: `textToSpeechInProgress`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `scopedChatSynthesisInProgress`

---

### Focus on Chat View

ID: `workbench.panel.chat.view.copilot.focus`

When: `workbench.panel.chat.view.copilot.active`

## Cloud Changes

### Turn off Cloud Changes...

ID: `workbench.editSessions.actions.resetAuth`

Precondition: `editSessionsSignedIn`

## Code - OSS Dev

### Show Release Notes

ID: `update.showCurrentReleaseNotes`

Precondition: `releaseNotesUrl`

---

### Check for Updates...

ID: `update.checkForUpdate`

Precondition: `updateState == 'idle'`

---

### Download Update

ID: `update.downloadUpdate`

Precondition: `updateState == 'available for download'`

---

### Install Update

ID: `update.installUpdate`

Precondition: `updateState == 'downloaded'`

---

### Restart to Update

ID: `update.restartToUpdate`

Precondition: `updateState == 'ready'`

## Comments

### Show Unresolved

ID: `workbench.actions.workbench.panel.comments.toggleUnResolvedComments`

---

### Show Resolved

ID: `workbench.actions.workbench.panel.comments.toggleResolvedComments`

---

### Updated Time

ID: `workbench.actions.workbench.panel.comments.toggleSortByUpdatedAt`

---

### Position in File

ID: `workbench.actions.workbench.panel.comments.toggleSortByResource`

---

### Go to Next Commented Range

ID: `editor.action.nextCommentedRangeAction`

Default Keybinding:

- Windows: `Alt+F10`
- Linux: `Alt+F10`
- macOS: `Alt+F10`

When: `activeEditorHasCommentingRange`

---

### Go to Previous Commented Range

ID: `editor.action.previousCommentedRangeAction`

Default Keybinding:

- Windows: `Shift+Alt+F10`
- Linux: `Shift+Alt+F10`
- macOS: `Shift+Alt+F10`

When: `activeEditorHasCommentingRange`

---

### Go to Next Commenting Range

ID: `editor.action.nextCommentingRange`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Alt+DownArrow`
- Linux: `Ctrl+K Ctrl+Alt+DownArrow`
- macOS: `Cmd+K Alt+Cmd+DownArrow`

When: `accessibilityModeEnabled && commentFocused || accessibilityModeEnabled && editorFocus || accessibilityHelpIsShown && accessibilityModeEnabled && accessibleViewCurrentProviderId == 'comments'`

---

### Go to Previous Commenting Range

ID: `editor.action.previousCommentingRange`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Alt+UpArrow`
- Linux: `Ctrl+K Ctrl+Alt+UpArrow`
- macOS: `Cmd+K Alt+Cmd+UpArrow`

When: `accessibilityModeEnabled && commentFocused || accessibilityModeEnabled && editorFocus || accessibilityHelpIsShown && accessibilityModeEnabled && accessibleViewCurrentProviderId == 'comments'`

---

### Toggle Editor Commenting

ID: `workbench.action.toggleCommenting`

---

### Add Comment on Current Selection

ID: `workbench.action.addComment`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Alt+C`
- Linux: `Ctrl+K Ctrl+Alt+C`
- macOS: `Cmd+K Alt+Cmd+C`

When: `activeCursorHasCommentingRange`

---

### Focus Comment on Current Line

ID: `workbench.action.focusCommentOnCurrentLine`

Precondition: `activeCursorHasComment`

---

### Collapse All Comments

ID: `workbench.action.collapseAllComments`

---

### Expand All Comments

ID: `workbench.action.expandAllComments`

---

### Expand Unresolved Comments

ID: `workbench.action.expandUnresolvedComments`

## Create

### New File...

ID: `welcome.showNewFileEntries`

Default Keybinding:

- Windows: `Ctrl+Alt+Win+N`
- Linux: `Ctrl+Alt+Win+N`
- macOS: `Ctrl+Alt+Cmd+N`

## Debug

### Add Configuration...

ID: `debug.addConfiguration`

---

### Toggle Exception Breakpoints

ID: `debug.toggleExceptionBreakpoints`

Precondition: `debuggersAvailable`

---

### Focus on Debug Console View

ID: `workbench.debug.action.focusRepl`

## Debug Console

### Focus on Debug Console View

ID: `workbench.panel.repl.view.focus`

When: `workbench.panel.repl.view.active`

## Developer

### Inspect Context Keys

ID: `workbench.action.inspectContextKeys`

---

### Toggle Screencast Mode

ID: `workbench.action.toggleScreencastMode`

---

### Log Storage Database Contents

ID: `workbench.action.logStorage`

---

### Log Working Copies

ID: `workbench.action.logWorkingCopies`

---

### Remove Large Storage Database Entries...

ID: `workbench.action.removeLargeStorageDatabaseEntries`

---

### Policy Diagnostics

ID: `workbench.action.showPolicyDiagnostics`

---

### Start Tracking Disposables

ID: `workbench.action.startTrackDisposables`

Precondition: `dirtyWorkingCopies != 'pending' && dirtyWorkingCopies != 'started'`

---

### Snapshot Tracked Disposables

ID: `workbench.action.snapshotTrackedDisposables`

Precondition: `dirtyWorkingCopies == 'started'`

---

### Stop Tracking Disposables

ID: `workbench.action.stopTrackDisposables`

Precondition: `dirtyWorkingCopies == 'pending'`

---

### Reload Window

ID: `workbench.action.reloadWindow`

Default Keybinding:

- Windows: `Ctrl+R`
- Linux: `Ctrl+R`
- macOS: `Cmd+R`

When: `isDevelopment`

---

### Startup Performance

ID: `perfview.show`

---

### Print Service Cycles

ID: `perf.insta.printAsyncCycles`

---

### Print Service Traces

ID: `perf.insta.printTraces`

---

### Print Emitter Profiles

ID: `perf.event.profiling`

---

### Toggle Notebook View Zones

ID: `notebook.developer.addViewZones`

Precondition: `isDevelopment`

---

### Toggle Notebook Clipboard Troubleshooting

ID: `workbench.action.toggleNotebookClipboardLog`

---

### Reset notebook getting started

ID: `workbench.notebook.layout.gettingStarted`

Precondition: `config.notebook.experimental.openGettingStarted`

---

### Toggle Notebook Layout Troubleshoot

ID: `notebook.toggleLayoutTroubleshoot`

---

### Inspect Notebook Layout

ID: `notebook.inspectLayout`

---

### Clear Notebook Editor Type Cache

ID: `notebook.clearNotebookEdtitorTypeCache`

---

### Clear Notebook Kernels MRU Cache

ID: `notebook.clearNotebookKernelsMRUCache`

---

### Log Chat Input History

ID: `workbench.action.chat.logInputHistory`

Precondition: `chatIsEnabled`

---

### Log Chat Index

ID: `workbench.action.chat.logChatIndex`

Precondition: `chatIsEnabled`

---

### Show Running Extensions

ID: `workbench.action.showRuntimeExtensions`

---

### Set Log Level...

ID: `workbench.action.setLogLevel`

---

### Set Default Log Level

ID: `workbench.action.setDefaultLogLevel`

---

### Open Process Explorer

ID: `workbench.action.openProcessExplorer`

Precondition: `true`

---

### Open URL

ID: `workbench.action.url.openUrl`

---

### Reload Webviews

ID: `workbench.action.webview.reloadWebviewAction`

---

### Show Terminal Texture Atlas

ID: `workbench.action.terminal.showTextureAtlas`

Precondition: `terminalIsOpen`

---

### Write Data to Terminal

ID: `workbench.action.terminal.writeDataToTerminal`

Precondition: `terminalProcessSupported`

---

### Record Terminal Session

ID: `workbench.action.terminal.recordSession`

Precondition: `terminalProcessSupported`

---

### Restart Pty Host

ID: `workbench.action.terminal.restartPtyHost`

Precondition: `terminalProcessSupported`

---

### Connection: Trigger Reconnect

ID: `workbench.action.triggerReconnect`

---

### Connection: Pause socket writing

ID: `workbench.action.pauseSocketWriting`

---

### Reset Welcome Page Walkthrough Progress

ID: `resetGettingStartedProgress`

---

### Inspect Key Mappings

ID: `workbench.action.inspectKeyMappings`

---

### Inspect Key Mappings (JSON)

ID: `workbench.action.inspectKeyMappingsJSON`

---

### Toggle Keyboard Shortcuts Troubleshooting

ID: `workbench.action.toggleKeybindingsLog`

---

### Generate Color Theme From Current Settings

ID: `workbench.action.generateColorTheme`

---

### Open Current File as Release Notes

ID: `developer.showCurrentFileAsReleaseNotes`

---

### Cleanup Profiles

ID: `workbench.profiles.actions.cleanupProfiles`

---

### Reset Workspace Profiles Associations

ID: `workbench.profiles.actions.resetWorkspaces`

---

### Reload with Extensions Disabled

ID: `workbench.action.reloadWindowWithExtensionsDisabled`

---

### Toggle Developer Tools

ID: `workbench.action.toggleDevTools`

Default Keybinding:

- Windows: `Ctrl+Shift+I`
- Linux: `Ctrl+Shift+I`
- macOS: `Alt+Cmd+I`

When: `isDevelopment`

---

### Reveal User Data Folder

ID: `workbench.action.revealUserDataFolder`

---

### Show GPU Info

ID: `workbench.action.showGPUInfo`

---

### Stop Tracing

ID: `workbench.action.stopTracing`

---

### Measure Extension Host Latency

ID: `editor.action.measureExtHostLatency`

---

### Restart Extension Host

ID: `workbench.action.restartExtensionHost`

---

### Open Logs Folder

ID: `workbench.action.openLogsFolder`

---

### Open Extension Logs Folder

ID: `workbench.action.openExtensionLogsFolder`

---

### Start TextMate Syntax Grammar Logging

ID: `editor.action.startDebugTextMate`

---

### Debug Extension Host In New Window

ID: `workbench.extensions.action.debugExtensionHost`

---

### Debug Extension Host In Dev Tools

ID: `workbench.extensions.action.devtoolsExtensionHost`

---

### Download Settings Sync Activity

ID: `workbench.userDataSync.actions.downloadSyncActivity`

Precondition: `userDataSyncAccountStatus == 'available' && syncStatus != 'uninitialized'`

---

### Open Webview Developer Tools

ID: `workbench.action.webview.openDeveloperTools`

---

### Open Chat Storage Folder

ID: `workbench.action.chat.openStorageFolder`

Precondition: `chatIsEnabled`

---

### Show Telemetry

ID: `workbench.action.showTelemetry`

---

### Install Extension from Location...

ID: `workbench.extensions.action.installExtensionFromLocation`

---

### Show Window Log

ID: `workbench.action.showWindowLog`

---

### Show Logs...

ID: `workbench.action.showLogs`

---

### Open Log...

ID: `workbench.action.openLogFile`

---

### Export Logs...

ID: `workbench.action.exportLogs`

---

### Import Log...

ID: `workbench.action.importLog`

---

### Cleanup Extensions Folder

ID: `_workbench.extensions.action.cleanUpExtensionsFolder`

## Diff Editor

### Revert

ID: `diffEditor.revert`

Precondition: `isInDiffEditor`

---

### Switch Side

ID: `diffEditor.switchSide`

Precondition: `isInDiffEditor`

---

### Exit Compare Move

ID: `diffEditor.exitCompareMove`

Precondition: `comparingMovedCode`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Collapse All Unchanged Regions

ID: `diffEditor.collapseAllUnchangedRegions`

Precondition: `isInDiffEditor`

---

### Show All Unchanged Regions

ID: `diffEditor.showAllUnchangedRegions`

Precondition: `isInDiffEditor`

## Explorer

### Focus on Outline View

ID: `outline.focus`

When: `outline.active`

---

### Focus on Timeline View

ID: `timeline.focus`

When: `timeline.active`

---

### Focus on Open Editors View

ID: `workbench.files.action.focusOpenEditorsView`

Default Keybinding:

- Windows: `Ctrl+K E`
- Linux: `Ctrl+K E`
- macOS: `Cmd+K E`

When: `workbench.explorer.openEditorsView.active`

---

### Focus on No Folder Opened View

ID: `workbench.explorer.fileView.focus`

When: `workbench.explorer.emptyView.active`

---

### Focus on NPM Scripts View

ID: `npm.focus`

When: `npm.active`

## Extensions

### Manage Authorized Extension URIs...

ID: `workbench.extensions.action.manageAuthorizedExtensionURIs`

---

### Show Extensions using Copilot

ID: `workbench.action.chat.showExtensionsUsingCopilot`

Precondition: `chatIsEnabled`

---

### Focus on Extensions View

ID: `workbench.extensions.action.focusExtensionsView`

---

### Install Extensions

ID: `workbench.extensions.action.installExtensions`

---

### Check for Extension Updates

ID: `workbench.extensions.action.checkForUpdates`

---

### Enable Auto Update for All Extensions

ID: `workbench.extensions.action.enableAutoUpdate`

Precondition: `!config.extensions.autoUpdate`

---

### Disable Auto Update for All Extensions

ID: `workbench.extensions.action.disableAutoUpdate`

Precondition: `config.extensions.autoUpdate`

---

### Update All Extensions

ID: `workbench.extensions.action.updateAllExtensions`

Precondition: `hasOutdatedExtensions`

---

### Enable All Extensions

ID: `workbench.extensions.action.enableAll`

---

### Enable All Extensions for this Workspace

ID: `workbench.extensions.action.enableAllWorkspace`

---

### Disable All Installed Extensions

ID: `workbench.extensions.action.disableAll`

---

### Disable All Installed Extensions for this Workspace

ID: `workbench.extensions.action.disableAllWorkspace`

---

### Install from VSIX...

ID: `workbench.extensions.action.installVSIX`

---

### Show Featured Extensions

ID: `extensions.filter.featured`

---

### Show Popular Extensions

ID: `workbench.extensions.action.showPopularExtensions`

---

### Show Recommended Extensions

ID: `workbench.extensions.action.showRecommendedExtensions`

---

### Show Recently Published Extensions

ID: `workbench.extensions.action.recentlyPublishedExtensions`

---

### Show Installed Extensions

ID: `workbench.extensions.action.installedExtensions`

---

### Show Built-in Extensions

ID: `workbench.extensions.action.listBuiltInExtensions`

---

### Show Extension Updates

ID: `workbench.extensions.action.extensionUpdates`

Precondition: `hasGallery`

---

### Show Extensions Unsupported By Workspace

ID: `workbench.extensions.action.listWorkspaceUnsupportedExtensions`

---

### Show Enabled Extensions

ID: `workbench.extensions.action.showEnabledExtensions`

---

### Show Disabled Extensions

ID: `workbench.extensions.action.showDisabledExtensions`

---

### Clear Extensions Search Results

ID: `workbench.extensions.action.clearExtensionsSearchResults`

Precondition: `extensionSearchHasText`

---

### Refresh

ID: `workbench.extensions.action.refreshExtension`

---

### Install Specific Version of Extension...

ID: `workbench.extensions.action.install.specificVersion`

---

### Auto Update

ID: `workbench.extensions.action.toggleAutoUpdateForExtension`

Precondition: `isExtensionAllowed && isExtensionEnabled && !extensionDisallowInstall || isExtensionAllowed && !extensionDisallowInstall && config.extensions.autoUpdate != 'onlyEnabledExtensions'`

---

### Auto Update All (From Publisher)

ID: `workbench.extensions.action.toggleAutoUpdatesForPublisher`

Precondition: `!config.extensions.autoUpdate`

---

### Switch to Pre-Release Version

ID: `workbench.extensions.action.switchToPreRlease`

---

### Switch to Release Version

ID: `workbench.extensions.action.switchToRelease`

---

### Add Extension to Workspace Recommendations

ID: `workbench.extensions.action.addToWorkspaceRecommendations`

---

### Add Extension to Workspace Folder Recommendations

ID: `workbench.extensions.action.addToWorkspaceFolderRecommendations`

---

### Add Extension to Workspace Ignored Recommendations

ID: `workbench.extensions.action.addToWorkspaceIgnoredRecommendations`

---

### Add Extension to Workspace Folder Ignored Recommendations

ID: `workbench.extensions.action.addToWorkspaceFolderIgnoredRecommendations`

---

### Configure Recommended Extensions (Workspace)

ID: `workbench.extensions.action.configureWorkspaceRecommendedExtensions`

---

### Manage Trusted Extension Publishers

ID: `workbench.extensions.action.manageTrustedPublishers`

---

### Focus on Installed View

ID: `workbench.views.extensions.installed.focus`

When: `workbench.views.extensions.installed.active`

---

### Focus on Popular View

ID: `workbench.views.extensions.popular.focus`

When: `workbench.views.extensions.popular.active`

---

### Focus on Recommended View

ID: `extensions.recommendedList.focus`

When: `extensions.recommendedList.active`

---

### Focus on Enabled View

ID: `workbench.views.extensions.enabled.focus`

When: `workbench.views.extensions.enabled.active`

---

### Focus on Disabled View

ID: `workbench.views.extensions.disabled.focus`

When: `workbench.views.extensions.disabled.active`

---

### Focus on Marketplace View

ID: `workbench.views.extensions.marketplace.focus`

When: `workbench.views.extensions.marketplace.active`

---

### Focus on Installed View

ID: `workbench.views.extensions.searchInstalled.focus`

When: `workbench.views.extensions.searchInstalled.active`

---

### Focus on Recently Updated View

ID: `workbench.views.extensions.searchRecentlyUpdated.focus`

When: `workbench.views.extensions.searchRecentlyUpdated.active`

---

### Focus on Enabled View

ID: `workbench.views.extensions.searchEnabled.focus`

When: `workbench.views.extensions.searchEnabled.active`

---

### Focus on Disabled View

ID: `workbench.views.extensions.searchDisabled.focus`

When: `workbench.views.extensions.searchDisabled.active`

---

### Focus on Available Updates View

ID: `workbench.views.extensions.searchOutdated.focus`

When: `workbench.views.extensions.searchOutdated.active`

---

### Focus on Builtin View

ID: `workbench.views.extensions.searchBuiltin.focus`

When: `workbench.views.extensions.searchBuiltin.active`

---

### Focus on Workspace Unsupported View

ID: `workbench.views.extensions.searchWorkspaceUnsupported.focus`

When: `workbench.views.extensions.searchWorkspaceUnsupported.active`

---

### Focus on Workspace Recommendations View

ID: `workbench.views.extensions.workspaceRecommendations.focus`

When: `workbench.views.extensions.workspaceRecommendations.active`

---

### Focus on Other Recommendations View

ID: `workbench.views.extensions.otherRecommendations.focus`

When: `workbench.views.extensions.otherRecommendations.active`

---

### Focus on Features View

ID: `workbench.views.extensions.builtinFeatureExtensions.focus`

When: `workbench.views.extensions.builtinFeatureExtensions.active`

---

### Focus on Themes View

ID: `workbench.views.extensions.builtinThemeExtensions.focus`

When: `workbench.views.extensions.builtinThemeExtensions.active`

---

### Focus on Programming Languages View

ID: `workbench.views.extensions.builtinProgrammingLanguageExtensions.focus`

When: `workbench.views.extensions.builtinProgrammingLanguageExtensions.active`

---

### Focus on Disabled in Restricted Mode View

ID: `workbench.views.extensions.untrustedUnsupportedExtensions.focus`

When: `workbench.views.extensions.untrustedUnsupportedExtensions.active`

---

### Focus on Limited in Restricted Mode View

ID: `workbench.views.extensions.untrustedPartiallySupportedExtensions.focus`

When: `workbench.views.extensions.untrustedPartiallySupportedExtensions.active`

---

### Focus on Disabled in Virtual Workspaces View

ID: `workbench.views.extensions.virtualUnsupportedExtensions.focus`

When: `workbench.views.extensions.virtualUnsupportedExtensions.active`

---

### Focus on Limited in Virtual Workspaces View

ID: `workbench.views.extensions.virtualPartiallySupportedExtensions.focus`

When: `workbench.views.extensions.virtualPartiallySupportedExtensions.active`

---

### Focus on Deprecated View

ID: `workbench.views.extensions.deprecatedExtensions.focus`

When: `workbench.views.extensions.deprecatedExtensions.active`

---

### Focus on Marketplace View

ID: `workbench.views.extensions.marketplaceAccess.focus`

When: `workbench.views.extensions.marketplaceAccess.active`

---

### Focus on MCP Servers - Installed View

ID: `workbench.views.mcp.installed.focus`

When: `workbench.views.mcp.installed.active`

---

### Focus on MCP Servers View

ID: `workbench.views.mcp.default.marketplace.focus`

When: `workbench.views.mcp.default.marketplace.active`

---

### Focus on MCP Servers View

ID: `workbench.views.mcp.marketplace.focus`

When: `workbench.views.mcp.marketplace.active`

---

### Focus on MCP Servers View

ID: `workbench.views.mcp.default.welcomeView.focus`

When: `workbench.views.mcp.default.welcomeView.active`

---

### Focus on MCP Servers View

ID: `workbench.views.mcp.welcomeView.focus`

When: `workbench.views.mcp.welcomeView.active`

---

### Open Extensions Folder

ID: `workbench.extensions.action.openExtensionsFolder`

## File

### Quick Open Recent...

ID: `workbench.action.quickOpenRecent`

---

### Open Recent...

ID: `workbench.action.openRecent`

Default Keybinding:

- Windows: `Ctrl+R`
- Linux: `Ctrl+R`
- macOS: `Ctrl+R`

---

### Open File...

ID: `workbench.action.files.openFile`

Default Keybinding:

- Windows: `Ctrl+O`
- Linux: `Ctrl+O`
- macOS: `Cmd+O`

When: `true`

---

### Open Folder...

ID: `workbench.action.files.openFolder`

Precondition: `openFolderWorkspaceSupport`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+O`
- Linux: `Ctrl+K Ctrl+O`
- macOS: ``

---

### Open Folder...

ID: `workbench.action.files.openFolderViaWorkspace`

Precondition: `!openFolderWorkspaceSupport && workbenchState == 'workspace'`

Default Keybinding:

- Windows: `Ctrl+O`
- Linux: `Ctrl+O`
- macOS: `Cmd+O`

---

### Open...

ID: `workbench.action.files.openFileFolder`

Precondition: `isMacNative && openFolderWorkspaceSupport`

Default Keybinding:

- Windows: `Ctrl+O`
- Linux: `Ctrl+O`
- macOS: `Cmd+O`

---

### Open Workspace from File...

ID: `workbench.action.openWorkspace`

Precondition: `enterMultiRootWorkspaceSupport`

---

### Clear Recently Opened...

ID: `workbench.action.clearRecentFiles`

---

### Show All Editors By Appearance

ID: `workbench.action.showAllEditors`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+P`
- Linux: `Ctrl+K Ctrl+P`
- macOS: `Alt+Cmd+Tab`

---

### Compare Active File With...

ID: `workbench.files.action.compareFileWith`

Precondition: `activeEditor`

---

### Focus on Files Explorer

ID: `workbench.files.action.focusFilesExplorer`

---

### Reveal Active File in Explorer View

ID: `workbench.files.action.showActiveFileInExplorer`

---

### Compare Active File with Clipboard

ID: `workbench.files.action.compareWithClipboard`

Default Keybinding:

- Windows: `Ctrl+K C`
- Linux: `Ctrl+K C`
- macOS: `Cmd+K C`

---

### Compare New Untitled Text Files

ID: `workbench.files.action.compareNewUntitledTextFiles`

---

### Toggle Auto Save

ID: `workbench.action.toggleAutoSave`

---

### Open Active File in New Empty Workspace

ID: `workbench.action.files.showOpenedFileInNewWindow`

Precondition: `emptyWorkspaceSupport`

---

### Set Active Editor Read-only in Session

ID: `workbench.action.files.setActiveEditorReadonlyInSession`

Precondition: `activeEditorCanToggleReadonly`

---

### Set Active Editor Writeable in Session

ID: `workbench.action.files.setActiveEditorWriteableInSession`

Precondition: `activeEditorCanToggleReadonly`

---

### Toggle Active Editor Read-only in Session

ID: `workbench.action.files.toggleActiveEditorReadonlyInSession`

Precondition: `activeEditorCanToggleReadonly`

---

### Reset Active Editor Read-only in Session

ID: `workbench.action.files.resetActiveEditorReadonlyInSession`

Precondition: `activeEditorCanToggleReadonly`

## Help

### View License

ID: `workbench.action.openLicenseUrl`

---

### Get Started with Accessibility Features

ID: `workbench.action.getStartedWithAccessibilityFeatures`

---

### Ask @vscode

ID: `workbench.action.askVScode`

Precondition: `!chatSetupHidden`

---

### About

ID: `workbench.action.showAboutDialog`

---

### Start Extension Bisect

ID: `extension.bisect.start`

Precondition: `!isExtensionBisectActive`

---

### Continue Extension Bisect

ID: `extension.bisect.next`

Precondition: `isExtensionBisectActive`

---

### Stop Extension Bisect

ID: `extension.bisect.stop`

Precondition: `isExtensionBisectActive`

---

### Welcome

ID: `workbench.action.openWalkthrough`

---

### Interactive Editor Playground

ID: `workbench.action.showInteractivePlayground`

---

### Troubleshoot Issue...

ID: `workbench.action.troubleshootIssue.start`

Precondition: `!isIssueTroubleshootActive && remoteName == ''`

---

### Stop Troubleshoot Issue

ID: `workbench.action.troubleshootIssue.stop`

Precondition: `isIssueTroubleshootActive`

---

### Profiles

ID: `workbench.profiles.actions.help`

---

### Report Performance Issue...

ID: `workbench.action.reportPerformanceIssueUsingReporter`

## Inline Chat

### Keep

ID: `inlineChat2.keep`

Precondition: `inlineChatHasEditsAgent && inlineChatVisible && !chatEdits.isRequestInProgress && activeEditor != 'workbench.editor.notebook' || inlineChatHasNotebookAgent && inlineChatVisible && !chatEdits.isRequestInProgress && activeEditor == 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+Shift+Y`
- Linux: `Ctrl+Shift+Y`
- macOS: `Shift+Cmd+Y`

---

### Undo

ID: `inlineChat2.undo`

Precondition: `inlineChatHasEditsAgent && inlineChatVisible && !chatEdits.isRequestInProgress && activeEditor != 'workbench.editor.notebook' || inlineChatHasNotebookAgent && inlineChatVisible && !chatEdits.isRequestInProgress && activeEditor == 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+Shift+N`
- Linux: `Ctrl+Shift+N`
- macOS: `Shift+Cmd+N`

---

### Close

ID: `inlineChat2.close`

Precondition: `inlineChatHasEditsAgent && inlineChatVisible && !chatEdits.hasEditorModifications && !chatEdits.isRequestInProgress && activeEditor != 'workbench.editor.notebook' || inlineChatHasEditsAgent && inlineChatVisible && !chatEdits.isRequestInProgress && chatEdits.requestCount == '0' && activeEditor != 'workbench.editor.notebook' || inlineChatHasNotebookAgent && inlineChatVisible && !chatEdits.hasEditorModifications && !chatEdits.isRequestInProgress && activeEditor == 'workbench.editor.notebook' || inlineChatHasNotebookAgent && inlineChatVisible && !chatEdits.isRequestInProgress && activeEditor == 'workbench.editor.notebook' && chatEdits.requestCount == '0'`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `chatEdits.requestCount == '0'`

---

### Toggle Inline Chat

ID: `inlineChat2.reveal`

Precondition: `!chatEdits.isGlobalEditingSession && inlineChatHasEditsAgent && activeEditor != 'workbench.editor.notebook' || inlineChatHasNotebookAgent && activeEditor == 'workbench.editor.notebook' && chatEdits.requestCount >= 1`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

---

### Cancel Request

ID: `inlineChat2.cancelRequest`

Precondition: `chatEdits.isRequestInProgress && inlineChatHasEditsAgent && !chatEdits.isGlobalEditingSession && activeEditor != 'workbench.editor.notebook' || chatEdits.isRequestInProgress && inlineChatHasNotebookAgent && !chatEdits.isGlobalEditingSession && activeEditor == 'workbench.editor.notebook'`

---

### Start in Editor with Current Line

ID: `inlineChat.startWithCurrentLine`

Precondition: `inlineChatHasNotebookInline && !editorReadonly && !inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && !editorReadonly && !inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `inlineChatShowingHint`

---

### Show Inline Chat Hint

ID: `inlineChat.showHint`

Precondition: `inlineChatHasNotebookInline && !editorReadonly && !inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && !editorReadonly && !inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

---

### Open Inline Chat

ID: `inlineChat.start`

Precondition: `inlineChatHasEditsAgent && inlineChatPossible && !editorReadonly && !editorSimpleInput && activeEditor != 'workbench.editor.notebook' || inlineChatHasNotebookAgent && inlineChatPossible && !editorReadonly && !editorSimpleInput && activeEditor == 'workbench.editor.notebook' || inlineChatHasNotebookInline && inlineChatPossible && !editorReadonly && !editorSimpleInput && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatPossible && !editorReadonly && !editorSimpleInput && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `editorFocus`

---

### Close

ID: `inlineChat.close`

Precondition: `inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Configure Inline Chat

ID: `inlineChat.configure`

Precondition: `inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

---

### Resume Last Dismissed Inline Chat

ID: `inlineChat.unstash`

Precondition: `inlineChatHasStashedSession && !editorReadonly`

Default Keybinding:

- Windows: `Ctrl+Z`
- Linux: `Ctrl+Z`
- macOS: `Cmd+Z`

---

### Discard

ID: `inlineChat.discardHunkChange`

Precondition: `inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `inlineChatResponseType == 'messagesAndEdits'`

---

### Rerun Request

ID: `inlineChat.regenerate`

Precondition: `inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+R`
- Linux: `Ctrl+R`
- macOS: `Cmd+R`

---

### Move to Next Change

ID: `inlineChat.moveToNextHunk`

Precondition: `inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `F7`
- Linux: `F7`
- macOS: `F7`

---

### Move to Previous Change

ID: `inlineChat.moveToPreviousHunk`

Precondition: `inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Shift+F7`
- Linux: `Shift+F7`
- macOS: `Shift+F7`

---

### Cursor Up

ID: `inlineChat.arrowOutUp`

Precondition: `inlineChatFocused && inlineChatHasNotebookInline && inlineChatInnerCursorFirst && !accessibilityModeEnabled && !isEmbeddedDiffEditor && activeEditor == 'workbench.editor.notebook' || inlineChatFocused && inlineChatHasProvider && inlineChatInnerCursorFirst && !accessibilityModeEnabled && !isEmbeddedDiffEditor && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow`

---

### Cursor Down

ID: `inlineChat.arrowOutDown`

Precondition: `inlineChatFocused && inlineChatHasNotebookInline && inlineChatInnerCursorLast && !accessibilityModeEnabled && !isEmbeddedDiffEditor && activeEditor == 'workbench.editor.notebook' || inlineChatFocused && inlineChatHasProvider && inlineChatInnerCursorLast && !accessibilityModeEnabled && !isEmbeddedDiffEditor && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

---

### Focus Input

ID: `inlineChat.focus`

Precondition: `editorTextFocus && inlineChatVisible && !accessibilityModeEnabled && !inlineChatFocused`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `!isEmbeddedDiffEditor && inlineChatOuterCursorPosition == 'above'`

---

### View in Chat

ID: `inlineChat.viewInChat`

Precondition: `inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `inChatInput`

---

### Toggle Changes

ID: `inlineChat.toggleDiff`

Precondition: `inlineChatChangeHasDiff && inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatChangeHasDiff && inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

---

### Accept Changes

ID: `inlineChat.acceptChanges`

Precondition: `inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || inlineChatHasProvider && inlineChatVisible && activeEditor != 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

---

### Close

ID: `workbench.action.terminal.chat.close`

Precondition: `chatIsEnabled && terminalChatVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `terminalChatFocus && terminalChatVisible || terminalChatVisible && terminalFocus`

---

### Run Chat Command

ID: `workbench.action.terminal.chat.runCommand`

Precondition: `chatIsEnabled && terminalChatResponseContainsCodeBlock && terminalHasBeenCreated && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks || chatIsEnabled && terminalChatResponseContainsCodeBlock && terminalProcessSupported && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `!terminalChatActiveRequest`

---

### Run First Chat Command

ID: `workbench.action.terminal.chat.runFirstCommand`

Precondition: `chatIsEnabled && terminalChatResponseContainsMultipleCodeBlocks && terminalHasBeenCreated && !terminalChatActiveRequest || chatIsEnabled && terminalChatResponseContainsMultipleCodeBlocks && terminalProcessSupported && !terminalChatActiveRequest`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `!terminalChatActiveRequest`

---

### Insert Chat Command

ID: `workbench.action.terminal.chat.insertCommand`

Precondition: `chatIsEnabled && terminalChatResponseContainsCodeBlock && terminalHasBeenCreated && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks || chatIsEnabled && terminalChatResponseContainsCodeBlock && terminalProcessSupported && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks`

Default Keybinding:

- Windows: `Alt+Enter`
- Linux: `Alt+Enter`
- macOS: `Alt+Enter`

Secondary Keybinding:

- Windows: `Ctrl+Alt+Enter`
- Linux: `Ctrl+Alt+Enter`
- macOS: `Alt+Cmd+Enter`

When: `!terminalChatActiveRequest`

---

### Insert First Chat Command

ID: `workbench.action.terminal.chat.insertFirstCommand`

Precondition: `chatIsEnabled && terminalChatResponseContainsMultipleCodeBlocks && terminalHasBeenCreated && !terminalChatActiveRequest || chatIsEnabled && terminalChatResponseContainsMultipleCodeBlocks && terminalProcessSupported && !terminalChatActiveRequest`

Default Keybinding:

- Windows: `Alt+Enter`
- Linux: `Alt+Enter`
- macOS: `Alt+Enter`

Secondary Keybinding:

- Windows: `Ctrl+Alt+Enter`
- Linux: `Ctrl+Alt+Enter`
- macOS: `Alt+Cmd+Enter`

When: `!terminalChatActiveRequest`

---

### Rerun Request

ID: `workbench.action.terminal.chat.rerunRequest`

Precondition: `chatIsEnabled && terminalHasBeenCreated && !terminalChatActiveRequest || chatIsEnabled && terminalProcessSupported && !terminalChatActiveRequest`

Default Keybinding:

- Windows: `Ctrl+R`
- Linux: `Ctrl+R`
- macOS: `Cmd+R`

When: `terminalChatFocus`

---

### View in Chat

ID: `workbench.action.terminal.chat.viewInChat`

Precondition: `chatIsEnabled && terminalHasBeenCreated && !terminalChatActiveRequest || chatIsEnabled && terminalProcessSupported && !terminalChatActiveRequest`

---

### Hold for Speech

ID: `inlineChat.holdForSpeech`

Precondition: `hasSpeechProvider && inlineChatVisible`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `textInputFocus`

## Interactive Window

### Open Interactive Window

ID: `_interactive.open`

---

### Execute Code

ID: `interactive.execute`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `isCompositeNotebook && activeEditor == 'workbench.editor.interactive'`

---

### Clear the interactive window input editor contents

ID: `interactive.input.clear`

---

### Previous value in history

ID: `interactive.history.previous`

Precondition: `isCompositeNotebook && !notebookEditorFocused`

Default Keybinding:

- Windows: `UpArrow`
- Linux: `UpArrow`
- macOS: `UpArrow`

When: `!suggestWidgetVisible && interactiveInputCursorAtBoundary != 'bottom' && interactiveInputCursorAtBoundary != 'none'`

---

### Next value in history

ID: `interactive.history.next`

Precondition: `isCompositeNotebook && !notebookEditorFocused`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

When: `!suggestWidgetVisible && interactiveInputCursorAtBoundary != 'none' && interactiveInputCursorAtBoundary != 'top'`

---

### Scroll to Top

ID: `interactive.scrollToTop`

Default Keybinding:

- Windows: `Ctrl+Home`
- Linux: `Ctrl+Home`
- macOS: `Cmd+UpArrow`

When: `activeEditor == 'workbench.editor.interactive'`

---

### Scroll to Bottom

ID: `interactive.scrollToBottom`

Default Keybinding:

- Windows: `Ctrl+End`
- Linux: `Ctrl+End`
- macOS: `Cmd+DownArrow`

When: `activeEditor == 'workbench.editor.interactive'`

---

### Focus Input Editor

ID: `interactive.input.focus`

---

### Focus History

ID: `interactive.history.focus`

Precondition: `isCompositeNotebook && !notebookEditorFocused`

Default Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow`

When: `interactiveInputCursorAtBoundary != 'bottom' && interactiveInputCursorAtBoundary != 'none'`

## List

### Resize Column

ID: `list.resizeColumn`

Precondition: `listFocus && !inputFocus && !treestickyScrollFocused`

## Local History

### Find Entry to Restore

ID: `workbench.action.localHistory.restoreViaPicker`

Precondition: `config.workbench.localHistory.enabled`

---

### Delete All

ID: `workbench.action.localHistory.deleteAll`

Precondition: `config.workbench.localHistory.enabled`

---

### Create Entry

ID: `workbench.action.localHistory.create`

Precondition: `activeEditor && config.workbench.localHistory.enabled`

## MCP

### List Servers

ID: `workbench.mcp.listServer`

---

### Server Options

ID: `workbench.mcp.serverOptions`

---

### Server Options

ID: `workbench.mcp.serverOptionsInConfirmation`

---

### Reset Trust

ID: `workbench.mcp.resetTrust`

Precondition: `mcp.toolsCount > 0`

---

### Reset Cached Tools

ID: `workbench.mcp.resetCachedTools`

Precondition: `mcp.toolsCount > 0`

---

### Add Server...

ID: `workbench.mcp.addConfiguration`

---

### Reset Cached Tools

ID: `workbench.mcp.removeStoredInput`

---

### Edit Stored Input

ID: `workbench.mcp.editStoredInput`

---

### Start Server

ID: `workbench.mcp.startServer`

---

### Stop Server

ID: `workbench.mcp.stopServer`

---

### Show Output

ID: `workbench.mcp.showOutput`

---

### Restart Server

ID: `workbench.mcp.restartServer`

---

### Show Configuration

ID: `workbench.mcp.showConfiguration`

---

### MCP Servers

ID: `workbench.mcp.browseServers`

---

### Open User Configuration

ID: `workbench.mcp.openUserMcpJson`

---

### Open Remote User Configuration

ID: `workbench.mcp.openRemoteUserMcpJson`

Precondition: `remoteName != ''`

---

### Open Workspace MCP Configuration

ID: `workbench.mcp.openWorkspaceMcpJson`

Precondition: `workbenchState == 'workspace'`

---

### Open Workspace Folder MCP Configuration

ID: `workbench.mcp.openWorkspaceFolderMcpJson`

Precondition: `workspaceFolderCount != '0'`

---

### Show Installed Servers

ID: `workbench.mcp.showInstalledServers`

Precondition: `hasInstalledMcpServers`

---

### Browse Resources...

ID: `workbench.mcp.browseResources`

Precondition: `mcp.serverCount > 0`

---

### Configure SamplingModel

ID: `workbench.mcp.configureSamplingModels`

---

### Start Prompting Server

ID: `workbench.mcp.startPromptForServer`

---

### Skip Current Autostart

ID: `workbench.mcp.skipAutostart`

## Merge Editor

### Open File

ID: `merge.openResult`

Precondition: `isMergeEditor`

---

### Open Base File

ID: `merge.openBaseEditor`

Precondition: `isMergeEditor`

---

### Go to Next Unhandled Conflict

ID: `merge.goToNextUnhandledConflict`

Precondition: `isMergeEditor`

---

### Go to Previous Unhandled Conflict

ID: `merge.goToPreviousUnhandledConflict`

Precondition: `isMergeEditor`

---

### Toggle Current Conflict from Left

ID: `merge.toggleActiveConflictInput1`

Precondition: `isMergeEditor`

---

### Toggle Current Conflict from Right

ID: `merge.toggleActiveConflictInput2`

Precondition: `isMergeEditor`

---

### Compare Input 1 With Base

ID: `mergeEditor.compareInput1WithBase`

Precondition: `isMergeEditor`

---

### Compare Input 2 With Base

ID: `mergeEditor.compareInput2WithBase`

Precondition: `isMergeEditor`

---

### Accept All Incoming Changes from Left

ID: `merge.acceptAllInput1`

Precondition: `isMergeEditor`

---

### Accept All Current Changes from Right

ID: `merge.acceptAllInput2`

Precondition: `isMergeEditor`

---

### Reset Result

ID: `mergeEditor.resetResultToBaseAndAutoMerge`

Precondition: `isMergeEditor`

---

### Complete Merge

ID: `mergeEditor.acceptMerge`

Precondition: `isMergeEditor`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `isMergeEditor`

---

### Reset Choice for 'Close with Conflicts'

ID: `mergeEditor.resetCloseWithConflictsChoice`

---

### Accept All Combination

ID: `mergeEditor.acceptAllCombination`

---

### Toggle Between Merge Editor Inputs

ID: `mergeEditor.toggleBetweenInputs`

Precondition: `isMergeEditor`

Default Keybinding:

- Windows: `Ctrl+Shift+T`
- Linux: `Ctrl+Shift+T`
- macOS: `Shift+Cmd+T`

When: `isMergeEditor`

## Merge Editor (Dev)

### Copy Merge Editor State as JSON

ID: `merge.dev.copyContentsJson`

Precondition: `isMergeEditor`

---

### Save Merge Editor State to Folder

ID: `merge.dev.saveContentsToFolder`

Precondition: `isMergeEditor`

---

### Load Merge Editor State from Folder

ID: `merge.dev.loadContentsFromFolder`

---

### Open Merge Editor State from JSON

ID: `merge.dev.openContentsJson`

---

### Open Selection In Temporary Merge Editor

ID: `merge.dev.openSelectionInTemporaryMergeEditor`

## Notebook

### Select Notebook Kernel

ID: `_notebook.selectKernel`

Precondition: `activeEditor == 'workbench.editor.notebook'`

---

### Toggle Notebook Line Numbers

ID: `notebook.toggleLineNumbers`

Precondition: `notebookEditorFocused`

---

### Show Cell Line Numbers

ID: `notebook.cell.toggleLineNumbers`

Precondition: `activeEditor == 'workbench.editor.notebook'`

---

### Show Empty Outputs

ID: `notebook.cellOuput.showEmptyOutputs`

---

### Copy Cell Output

ID: `notebook.cellOutput.copy`

---

### Open Cell Output in Text Editor

ID: `notebook.cellOutput.openInTextEditor`

---

### Open in Output Preview

ID: `notebook.cellOutput.openInOutputPreview`

---

### Fold Cell

ID: `notebook.fold`

Precondition: `activeEditor == 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+Shift+[`
- Linux: `Ctrl+Shift+[`
- macOS: `Alt+Cmd+[`

Secondary Keybinding:

- Windows: `LeftArrow`
- Linux: `LeftArrow`
- macOS: `LeftArrow`

When: `notebookEditorFocused && !inputFocus`

---

### Unfold Cell

ID: `notebook.unfold`

Precondition: `activeEditor == 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+Shift+]`
- Linux: `Ctrl+Shift+]`
- macOS: `Alt+Cmd+]`

Secondary Keybinding:

- Windows: `RightArrow`
- Linux: `RightArrow`
- macOS: `RightArrow`

When: `notebookEditorFocused && !inputFocus`

---

### Insert Code Cell Above

ID: `notebook.cell.insertCodeCellAbove`

Default Keybinding:

- Windows: `Ctrl+Shift+Enter`
- Linux: `Ctrl+Shift+Enter`
- macOS: `Shift+Cmd+Enter`

When: `notebookCellListFocused && !inputFocus`

---

### Insert Code Cell Above and Focus Container

ID: `notebook.cell.insertCodeCellAboveAndFocusContainer`

---

### Insert Code Cell Below

ID: `notebook.cell.insertCodeCellBelow`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `notebookCellListFocused && !inputFocus`

---

### Insert Code Cell Below and Focus Container

ID: `notebook.cell.insertCodeCellBelowAndFocusContainer`

---

### Insert Markdown Cell Above

ID: `notebook.cell.insertMarkdownCellAbove`

---

### Insert Markdown Cell Below

ID: `notebook.cell.insertMarkdownCellBelow`

---

### Add Code Cell At Top

ID: `notebook.cell.insertCodeCellAtTop`

---

### Add Markdown Cell At Top

ID: `notebook.cell.insertMarkdownCellAtTop`

---

### Render All Markdown Cells

ID: `notebook.renderAllMarkdownCells`

---

### Run All

ID: `notebook.execute`

---

### Execute Cell

ID: `notebook.cell.execute`

Precondition: `notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code' || !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0`

Default Keybinding:

- Windows: `Ctrl+Alt+Enter`
- Linux: `Win+Enter`
- macOS: `Ctrl+Enter`

When: `notebookCellListFocused`

---

### Execute Above Cells

ID: `notebook.cell.executeCellsAbove`

Precondition: `notebookMissingKernelExtension && notebookCellType == 'code' || notebookCellType == 'code' && notebookKernelCount > 0 || notebookCellType == 'code' && notebookKernelSourceCount > 0`

---

### Execute Cell and Below

ID: `notebook.cell.executeCellAndBelow`

Precondition: `notebookMissingKernelExtension && notebookCellType == 'code' || notebookCellType == 'code' && notebookKernelCount > 0 || notebookCellType == 'code' && notebookKernelSourceCount > 0`

---

### Execute Cell and Focus Container

ID: `notebook.cell.executeAndFocusContainer`

Precondition: `notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code' || !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0`

---

### Stop Cell Execution

ID: `notebook.cell.cancelExecution`

Precondition: `notebookCellExecutionState == 'executing' || notebookCellExecutionState == 'pending'`

---

### Execute Notebook Cell and Select Below

ID: `notebook.cell.executeAndSelectBelow`

Precondition: `notebookCellType == 'markup' || notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code' || !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0`

Default Keybinding:

- Windows: `Shift+Enter`
- Linux: `Shift+Enter`
- macOS: `Shift+Enter`

When: `notebookCellListFocused && !inlineChatFocused`

---

### Execute Notebook Cell and Insert Below

ID: `notebook.cell.executeAndInsertBelow`

Precondition: `notebookCellType == 'markup' || notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code' || !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0`

Default Keybinding:

- Windows: `Alt+Enter`
- Linux: `Alt+Enter`
- macOS: `Alt+Enter`

When: `notebookCellListFocused`

---

### Stop Execution

ID: `notebook.cancelExecution`

---

### Interrupt

ID: `notebook.interruptExecution`

Precondition: `notebookHasSomethingRunning && notebookInterruptibleKernel`

---

### Go to Running Cell

ID: `notebook.revealRunningCell`

Precondition: `notebookHasRunningCell`

---

### Go to Most Recently Failed Cell

ID: `notebook.revealLastFailedCell`

Precondition: `notebookLastCellFailed`

---

### Select between Notebook Layouts

ID: `workbench.notebook.layout.select`

Precondition: `config.notebook.experimental.openGettingStarted`

---

### Customize Notebook Layout

ID: `workbench.notebook.layout.configure`

---

### Customize Notebook Layout

ID: `workbench.notebook.layout.configure.editorTitle`

---

### Toggle Notebook Line Numbers

ID: `notebook.toggleLineNumbersFromEditorTitle`

Precondition: `notebookEditorFocused`

---

### Toggle Cell Toolbar Position

ID: `notebook.toggleCellToolbarPositionFromEditorTitle`

---

### Save Mimetype Display Order

ID: `notebook.saveMimeTypeOrder`

Precondition: `activeEditor == 'workbench.editor.notebook'`

---

### Reset Notebook Webview

ID: `workbench.notebook.layout.webview.reset`

---

### Clear All Inline Values

ID: `notebook.clearAllInlineValues`

---

### Edit Cell

ID: `notebook.cell.edit`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `notebookCellListFocused && !editorHoverFocused && !inputFocus && !notebookOutputInputFocused`

---

### Stop Editing Cell

ID: `notebook.cell.quitEdit`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `inputFocus && notebookEditorFocused && !editorHasMultipleSelections && !editorHasSelection && !editorHoverVisible && !inlineChatFocused`

---

### Stop Editing All Cells

ID: `notebook.quitEditAllCells`

---

### Delete Cell

ID: `notebook.cell.delete`

Default Keybinding:

- Windows: `Delete`
- Linux: `Delete`
- macOS: `Cmd+Backspace`

When: `notebookEditorFocused && !inputFocus && !notebookOutputInputFocused`

---

### Clear Cell Outputs

ID: `notebook.cell.clearOutputs`

Default Keybinding:

- Windows: `Alt+Delete`
- Linux: `Alt+Delete`
- macOS: `Alt+Delete`

When: `notebookCellEditable && notebookCellHasOutputs && notebookEditable && notebookEditorFocused && !inputFocus`

---

### Clear All Outputs

ID: `notebook.clearAllCellsOutputs`

Precondition: `notebookHasOutputs`

---

### Change Cell Language

ID: `notebook.cell.changeLanguage`

Default Keybinding:

- Windows: `Ctrl+K M`
- Linux: `Ctrl+K M`
- macOS: `Cmd+K M`

When: `notebookCellEditable && notebookEditable && notebookEditorFocused`

---

### Accept Detected Language for Cell

ID: `notebook.cell.detectLanguage`

Precondition: `notebookCellEditable && notebookEditable`

Default Keybinding:

- Windows: `Shift+Alt+D`
- Linux: `Shift+Alt+D`
- macOS: `Shift+Alt+D`

---

### Select Indentation

ID: `notebook.selectIndentation`

Precondition: `notebookCellEditable && notebookEditable && activeEditor == 'workbench.editor.notebook'`

---

### Comment Selected Cells

ID: `notebook.commentSelectedCells`

Default Keybinding:

- Windows: `Ctrl+/`
- Linux: `Ctrl+/`
- macOS: `Cmd+/`

When: `notebookEditable && notebookEditorFocused && !inputFocus`

---

### $(sparkle) Generate

ID: `notebook.cell.chat.start`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

Secondary Keybinding:

- Windows: `Ctrl+K I`
- Linux: `Ctrl+K I`
- macOS: `Cmd+K I`

When: `config.notebook.experimental.cellChat && notebookChatAgentRegistered && notebookEditable && notebookEditorFocused && !inputFocus || config.notebook.experimental.generate && notebookChatAgentRegistered && notebookEditable && notebookEditorFocused && !inputFocus`

---

### $(sparkle) Generate

ID: `notebook.cell.chat.startAtTop`

---

### Add Cell Output to Chat

ID: `notebook.cellOutput.addToChat`

Precondition: `chatIsEnabled`

---

### Variables

ID: `notebook.openVariablesView`

---

### Copy Cell

ID: `notebook.cell.copy`

---

### Cut Cell

ID: `notebook.cell.cut`

---

### Paste Cell

ID: `notebook.cell.paste`

---

### Paste Cell Above

ID: `notebook.cell.pasteAbove`

Default Keybinding:

- Windows: `Ctrl+Shift+V`
- Linux: `Ctrl+Shift+V`
- macOS: `Shift+Cmd+V`

When: `notebookEditorFocused && !inputFocus`

---

### Select All

ID: `notebook.cell.output.selectAll`

Default Keybinding:

- Windows: `Ctrl+A`
- Linux: `Ctrl+A`
- macOS: `Cmd+A`

When: `notebookEditorFocused && notebookOutputFocused`

---

### Find in Notebook

ID: `notebook.find`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

When: `notebookEditorFocused && !editorFocus && activeEditor == 'workbench.editor.interactive' || notebookEditorFocused && !editorFocus && activeEditor == 'workbench.editor.notebook'`

---

### Select All Occurrences of Find Match

ID: `notebook.selectAllFindMatches`

Precondition: `config.notebook.multiCursor.enabled`

Default Keybinding:

- Windows: `Ctrl+Shift+L`
- Linux: `Ctrl+Shift+L`
- macOS: `Shift+Cmd+L`

When: `config.notebook.multiCursor.enabled && notebookFindWidgetFocused || config.notebook.multiCursor.enabled && notebookCellEditorFocused && activeEditor == 'workbench.editor.notebook'`

---

### Add Selection to Next Find Match

ID: `notebook.addFindMatchToSelection`

Precondition: `config.notebook.multiCursor.enabled && notebookCellEditorFocused && activeEditor == 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Ctrl+D`
- Linux: `Ctrl+D`
- macOS: `Cmd+D`

When: `config.notebook.multiCursor.enabled && notebookCellEditorFocused && activeEditor == 'workbench.editor.notebook'`

---

### Exit Multi Cursor Mode

ID: `noteMultiCursor.exit`

Precondition: `config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook'`

---

### Delete Left

ID: `noteMultiCursor.deleteLeft`

Precondition: `config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook' && notebookMultiSelectCursorState == '1' || config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook' && notebookMultiSelectCursorState == '2'`

Default Keybinding:

- Windows: `Backspace`
- Linux: `Backspace`
- macOS: `Backspace`

When: `config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook' && notebookMultiSelectCursorState == '1' || config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook' && notebookMultiSelectCursorState == '2'`

---

### Delete Right

ID: `noteMultiCursor.deleteRight`

Precondition: `config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook' && notebookMultiSelectCursorState == '1' || config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook' && notebookMultiSelectCursorState == '2'`

Default Keybinding:

- Windows: `Delete`
- Linux: `Delete`
- macOS: `Delete`

When: `config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook' && notebookMultiSelectCursorState == '1' || config.notebook.multiCursor.enabled && isNotebookMultiSelect && activeEditor == 'workbench.editor.notebook' && notebookMultiSelectCursorState == '2'`

---

### Format Notebook

ID: `notebook.format`

Precondition: `notebookEditable && activeEditor == 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Shift+Alt+F`
- Linux: `Ctrl+Shift+I`
- macOS: `Shift+Alt+F`

When: `!editorTextFocus`

---

### Toggle Cell Toolbar Position

ID: `notebook.toggleCellToolbarPosition`

---

### Focus Next Cell Editor

ID: `notebook.focusNextEditor`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

When: `config.notebook.navigation.allowNavigateToSurroundingCells && editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtLineBoundary == 'both' && notebookEditorCursorAtBoundary != 'none' && notebookEditorCursorAtBoundary != 'top' || config.notebook.navigation.allowNavigateToSurroundingCells && editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtLineBoundary == 'end' && notebookEditorCursorAtBoundary != 'none' && notebookEditorCursorAtBoundary != 'top'`

---

### Focus Previous Cell Editor

ID: `notebook.focusPreviousEditor`

Default Keybinding:

- Windows: `UpArrow`
- Linux: `UpArrow`
- macOS: `UpArrow`

When: `config.notebook.navigation.allowNavigateToSurroundingCells && editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtLineBoundary == 'both' && notebookEditorCursorAtBoundary != 'bottom' && notebookEditorCursorAtBoundary != 'none' || config.notebook.navigation.allowNavigateToSurroundingCells && editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtLineBoundary == 'start' && notebookEditorCursorAtBoundary != 'bottom' && notebookEditorCursorAtBoundary != 'none'`

---

### Focus First Cell

ID: `notebook.focusTop`

Default Keybinding:

- Windows: `Ctrl+Home`
- Linux: `Ctrl+Home`
- macOS: `Cmd+Home`

When: `notebookEditorFocused && !inputFocus`

---

### Focus Last Cell

ID: `notebook.focusBottom`

Default Keybinding:

- Windows: `Ctrl+End`
- Linux: `Ctrl+End`
- macOS: `Cmd+End`

When: `notebookEditorFocused && !inputFocus`

---

### Focus In Active Cell Output

ID: `notebook.cell.focusInOutput`

Precondition: `activeEditor == 'workbench.editor.interactive' || activeEditor == 'workbench.editor.notebook' || activeEditor == 'workbench.editor.repl'`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `isWindows && notebookCellHasOutputs && !isCompositeNotebook`

---

### Focus Out Active Cell Output

ID: `notebook.cell.focusOutOutput`

Precondition: `notebookEditorFocused && notebookOutputFocused`

Default Keybinding:

- Windows: `Ctrl+Shift+UpArrow`
- Linux: `Ctrl+Shift+UpArrow`
- macOS: `Ctrl+Cmd+UpArrow`

---

### Center Active Cell

ID: `notebook.centerActiveCell`

Default Keybinding:

- Windows: `Ctrl+L`
- Linux: `Ctrl+L`
- macOS: `Ctrl+L`

When: `notebookEditorFocused`

---

### Cell Cursor Page Up

ID: `notebook.cell.cursorPageUp`

Default Keybinding:

- Windows: `PageUp`
- Linux: `PageUp`
- macOS: `PageUp`

When: `editorTextFocus && inputFocus && notebookEditorFocused`

---

### Cell Cursor Page Up Select

ID: `notebook.cell.cursorPageUpSelect`

Default Keybinding:

- Windows: `Shift+PageUp`
- Linux: `Shift+PageUp`
- macOS: `Shift+PageUp`

When: `editorTextFocus && inputFocus && notebookEditorFocused && !notebookOutputFocused`

---

### Cell Cursor Page Down

ID: `notebook.cell.cursorPageDown`

Default Keybinding:

- Windows: `PageDown`
- Linux: `PageDown`
- macOS: `PageDown`

When: `editorTextFocus && inputFocus && notebookEditorFocused`

---

### Cell Cursor Page Down Select

ID: `notebook.cell.cursorPageDownSelect`

Default Keybinding:

- Windows: `Shift+PageDown`
- Linux: `Shift+PageDown`
- macOS: `Shift+PageDown`

When: `editorTextFocus && inputFocus && notebookEditorFocused && !notebookOutputFocused`

---

### Move Cell Up

ID: `notebook.cell.moveUp`

Default Keybinding:

- Windows: `Alt+UpArrow`
- Linux: `Alt+UpArrow`
- macOS: `Alt+UpArrow`

When: `notebookEditorFocused && !inputFocus`

---

### Move Cell Down

ID: `notebook.cell.moveDown`

Default Keybinding:

- Windows: `Alt+DownArrow`
- Linux: `Alt+DownArrow`
- macOS: `Alt+DownArrow`

When: `notebookEditorFocused && !inputFocus`

---

### Copy Cell Up

ID: `notebook.cell.copyUp`

Default Keybinding:

- Windows: `Shift+Alt+UpArrow`
- Linux: `Shift+Alt+UpArrow`
- macOS: `Shift+Alt+UpArrow`

When: `notebookEditorFocused && !inputFocus`

---

### Copy Cell Down

ID: `notebook.cell.copyDown`

Default Keybinding:

- Windows: `Shift+Alt+DownArrow`
- Linux: `Shift+Alt+DownArrow`
- macOS: `Shift+Alt+DownArrow`

When: `notebookEditorFocused && !inputFocus`

---

### Split Cell

ID: `notebook.cell.split`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Shift+\`
- Linux: `Ctrl+K Ctrl+Shift+\`
- macOS: `Cmd+K Shift+Cmd+\`

When: `editorTextFocus && notebookCellEditable && notebookEditable && notebookEditorFocused`

---

### Join With Previous Cell

ID: `notebook.cell.joinAbove`

Default Keybinding:

- Windows: `Shift+Alt+Win+J`
- Linux: `Shift+Alt+Win+J`
- macOS: `Ctrl+Shift+Alt+J`

When: `notebookEditorFocused`

---

### Join With Next Cell

ID: `notebook.cell.joinBelow`

Default Keybinding:

- Windows: `Alt+Win+J`
- Linux: `Alt+Win+J`
- macOS: `Ctrl+Alt+J`

When: `notebookEditorFocused`

---

### Join Selected Cells

ID: `notebook.cell.joinSelected`

---

### Change Cell to Code

ID: `notebook.cell.changeToCode`

Precondition: `activeEditor == 'workbench.editor.notebook' && notebookCellType == 'markup'`

Default Keybinding:

- Windows: `Y`
- Linux: `Y`
- macOS: `Y`

When: `notebookEditorFocused && !inputFocus && !notebookOutputFocused`

---

### Change Cell to Markdown

ID: `notebook.cell.changeToMarkdown`

Precondition: `activeEditor == 'workbench.editor.notebook' && notebookCellType == 'code'`

Default Keybinding:

- Windows: `M`
- Linux: `M`
- macOS: `M`

When: `notebookEditorFocused && !inputFocus && !notebookOutputFocused`

---

### Collapse Cell Input

ID: `notebook.cell.collapseCellInput`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+C`
- Linux: `Ctrl+K Ctrl+C`
- macOS: `Cmd+K Cmd+C`

When: `notebookCellListFocused && !inputFocus && !notebookCellInputIsCollapsed`

---

### Expand Cell Input

ID: `notebook.cell.expandCellInput`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+C`
- Linux: `Ctrl+K Ctrl+C`
- macOS: `Cmd+K Cmd+C`

When: `notebookCellInputIsCollapsed && notebookCellListFocused`

---

### Collapse Cell Output

ID: `notebook.cell.collapseCellOutput`

Default Keybinding:

- Windows: `Ctrl+K T`
- Linux: `Ctrl+K T`
- macOS: `Cmd+K T`

When: `notebookCellHasOutputs && notebookCellListFocused && !inputFocus && !notebookCellOutputIsCollapsed`

---

### Expand Cell Output

ID: `notebook.cell.expandCellOutput`

Default Keybinding:

- Windows: `Ctrl+K T`
- Linux: `Ctrl+K T`
- macOS: `Cmd+K T`

When: `notebookCellListFocused && notebookCellOutputIsCollapsed`

---

### Toggle Outputs

ID: `notebook.cell.toggleOutputs`

Precondition: `notebookCellListFocused`

---

### Collapse All Cell Inputs

ID: `notebook.cell.collapseAllCellInputs`

---

### Expand All Cell Inputs

ID: `notebook.cell.expandAllCellInputs`

---

### Collapse All Cell Outputs

ID: `notebook.cell.collapseAllCellOutputs`

---

### Expand All Cell Outputs

ID: `notebook.cell.expandAllCellOutputs`

---

### Toggle Scroll Cell Output

ID: `notebook.cell.toggleOutputScrolling`

Default Keybinding:

- Windows: `Ctrl+K Y`
- Linux: `Ctrl+K Y`
- macOS: `Cmd+K Y`

When: `notebookCellHasOutputs && notebookCellListFocused && !inputFocus`

---

### Show Cell Failure Actions

ID: `notebook.cell.openFailureActions`

Precondition: `notebookCellFocused && notebookCellHasErrorDiagnostics && !notebookCellEditorFocused`

Default Keybinding:

- Windows: `Ctrl+.`
- Linux: `Ctrl+.`
- macOS: `Cmd+.`

When: `notebookCellFocused && notebookCellHasErrorDiagnostics && !notebookCellEditorFocused`

---

### Fix Cell Error

ID: `notebook.cell.chat.fixError`

Precondition: `notebookCellFocused && notebookCellHasErrorDiagnostics && !notebookCellEditorFocused`

---

### Explain Cell Error

ID: `notebook.cell.chat.explainError`

Precondition: `notebookCellFocused && notebookCellHasErrorDiagnostics && !notebookCellEditorFocused`

## Output

### Focus on Output View

ID: `workbench.panel.output.focus`

When: `workbench.panel.output.active`

---

### Add Compound Log...

ID: `workbench.action.output.addCompoundLog`

---

### Remove Output...

ID: `workbench.action.output.remove`

---

### Show Output Channels...

ID: `workbench.action.showOutputChannels`

## Ports

### Focus on Ports View

ID: `~remote.forwardedPorts.focus`

When: `~remote.forwardedPorts.active`

## Preferences

### Color Theme

ID: `workbench.action.selectTheme`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+T`
- Linux: `Ctrl+K Ctrl+T`
- macOS: `Cmd+K Cmd+T`

---

### File Icon Theme

ID: `workbench.action.selectIconTheme`

---

### Product Icon Theme

ID: `workbench.action.selectProductIconTheme`

---

### Toggle between Light/Dark Themes

ID: `workbench.action.toggleLightDarkThemes`

---

### Browse Color Themes in Marketplace

ID: `workbench.action.browseColorThemesInMarketplace`

---

### Configure Runtime Arguments

ID: `workbench.action.configureRuntimeArguments`

---

### Open Settings (UI)

ID: `workbench.action.openSettings2`

---

### Open User Settings (JSON)

ID: `workbench.action.openSettingsJson`

---

### Open Application Settings (JSON)

ID: `workbench.action.openApplicationSettingsJson`

---

### Open User Settings

ID: `workbench.action.openGlobalSettings`

---

### Open Default Settings (JSON)

ID: `workbench.action.openRawDefaultSettings`

---

### Configure Language Specific Settings...

ID: `workbench.action.configureLanguageBasedSettings`

---

### Open Workspace Settings

ID: `workbench.action.openWorkspaceSettings`

---

### Open Accessibility Settings

ID: `workbench.action.openAccessibilitySettings`

---

### Open Workspace Settings (JSON)

ID: `workbench.action.openWorkspaceSettingsFile`

---

### Open Folder Settings

ID: `workbench.action.openFolderSettings`

---

### Open Folder Settings (JSON)

ID: `workbench.action.openFolderSettingsFile`

---

### Open Folder Settings

ID: `_workbench.action.openFolderSettings`

---

### Toggle AI Settings Search

ID: `settings.action.toggleAiSearch`

Precondition: `inSettingsEditor`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `aiSettingResultsAvailable`

---

### Focus Settings Search

ID: `settings.action.search`

Precondition: `inSettingsEditor`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

---

### Clear Settings Search Results

ID: `settings.action.clearSearchResults`

Precondition: `inSettingsEditor`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `inSettingsSearch`

---

### Focus Settings Table of Contents

ID: `settings.action.focusTOC`

Precondition: `inSettingsEditor`

Default Keybinding:

- Windows: `LeftArrow`
- Linux: `LeftArrow`
- macOS: `LeftArrow`

When: `settingRowFocus`

---

### Show Setting Context Menu

ID: `settings.action.showContextMenu`

Precondition: `inSettingsEditor`

Default Keybinding:

- Windows: `Shift+F9`
- Linux: `Shift+F9`
- macOS: `Shift+F9`

---

### Move Focus Up One Level

ID: `settings.action.focusLevelUp`

Precondition: `inSettingsEditor && !inSettingsJSONEditor && !inSettingsSearch`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Open Keyboard Shortcuts

ID: `workbench.action.openGlobalKeybindings`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+S`
- Linux: `Ctrl+K Ctrl+S`
- macOS: `Cmd+K Cmd+S`

---

### Open Default Keyboard Shortcuts (JSON)

ID: `workbench.action.openDefaultKeybindingsFile`

---

### Open Keyboard Shortcuts (JSON)

ID: `workbench.action.openGlobalKeybindingsFile`

---

### Clear Keyboard Shortcuts Search History

ID: `keybindings.editor.clearSearchHistory`

---

### Open Remote Settings (vscode-remote)

ID: `workbench.action.openRemoteSettings`

---

### Open Remote Settings (JSON) (vscode-remote)

ID: `workbench.action.openRemoteSettingsFile`

---

### Keymaps

ID: `workbench.extensions.action.showRecommendedKeymapExtensions`

---

### Language Extensions

ID: `workbench.extensions.action.showLanguageExtensions`

## Problems

### Show Errors

ID: `workbench.actions.workbench.panel.markers.view.toggleErrors`

---

### Show Warnings

ID: `workbench.actions.workbench.panel.markers.view.toggleWarnings`

---

### Show Infos

ID: `workbench.actions.workbench.panel.markers.view.toggleInfos`

---

### Show Active File Only

ID: `workbench.actions.workbench.panel.markers.view.toggleActiveFile`

---

### Show Excluded Files

ID: `workbench.actions.workbench.panel.markers.view.toggleExcludedFiles`

---

### Show message in multiple lines

ID: `problems.action.showMultilineMessage`

---

### Show message in single line

ID: `problems.action.showSinglelineMessage`

---

### Clear filters text

ID: `problems.action.clearFilterText`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `problemsFilterFocus`

---

### Focus on Problems View

ID: `workbench.panel.markers.view.focus`

When: `workbench.panel.markers.view.active`

## Profiles

### New Window with Temporary Profile

ID: `workbench.profiles.actions.createTemporaryProfile`

---

### Switch Profile...

ID: `workbench.profiles.actions.switchProfile`

---

### New Window with Profile...

ID: `workbench.profiles.actions.newWindowWithProfile`

Precondition: `hasProfiles`

---

### Export Profile...

ID: `workbench.profiles.actions.exportProfile`

---

### Save Current Profile As...

ID: `workbench.profiles.actions.createFromCurrentProfile`

---

### New Profile...

ID: `workbench.profiles.actions.createProfile`

---

### Delete Profile...

ID: `workbench.profiles.actions.deleteProfile`

Precondition: `hasProfiles`

## REPL

### Focus Most Recent REPL Execution

ID: `repl.focusLastItemExecuted`

Precondition: `mostRecentReplEditor`

Default Keybinding:

- Windows: `Alt+End Alt+End`
- Linux: `Alt+End Alt+End`
- macOS: `Alt+End Alt+End`

When: `isCompositeNotebook || !notebookCellListFocused`

---

### Focus Input Editor

ID: `repl.input.focus`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `isCompositeNotebook && notebookEditorFocused`

---

### Execute REPL input

ID: `repl.execute`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `isCompositeNotebook && !notebookCellListFocused && activeEditor == 'workbench.editor.repl'`

## Refactor Preview

### Apply Refactoring

ID: `refactorPreview.apply`

Precondition: `refactorPreview.enabled && refactorPreview.hasCheckedChanges`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `refactorPreview.enabled && focusedView == 'refactorPreview'`

---

### Discard Refactoring

ID: `refactorPreview.discard`

Precondition: `refactorPreview.enabled`

---

### Toggle Change

ID: `refactorPreview.toggleCheckedState`

Precondition: `refactorPreview.enabled`

Default Keybinding:

- Windows: `Space`
- Linux: `Space`
- macOS: `Space`

When: `listFocus && !inputFocus && !treestickyScrollFocused`

---

### Group Changes By File

ID: `refactorPreview.groupByFile`

Precondition: `refactorPreview.enabled && refactorPreview.hasCategories && !refactorPreview.groupByFile`

---

### Group Changes By Type

ID: `refactorPreview.groupByType`

Precondition: `refactorPreview.enabled && refactorPreview.groupByFile && refactorPreview.hasCategories`

---

### Group Changes By Type

ID: `refactorPreview.toggleGrouping`

Precondition: `refactorPreview.enabled && refactorPreview.hasCategories`

---

### Focus on Refactor Preview View

ID: `refactorPreview.focus`

When: `refactorPreview.active`

## References

### Focus on Reference Search Results View

ID: `references-view.tree.focus`

When: `references-view.tree.active`

## Remote

### Close Unused Forwarded Ports

ID: `workbench.remote.action.closeUnusedPorts`

Precondition: `remoteName && config.remote.autoForwardPortsSource != 'output'`

---

### Show Remote Menu

ID: `workbench.action.remote.showMenu`

Default Keybinding:

- Windows: `Ctrl+Alt+O`
- Linux: `Ctrl+Alt+O`
- macOS: `Alt+Cmd+O`

---

### Close Remote Connection

ID: `workbench.action.remote.close`

Precondition: `remoteName || virtualWorkspace`

## Run and Debug

### Focus on Run View

ID: `workbench.debug.welcome.focus`

When: `workbench.debug.welcome.active`

---

### Focus on Variables View

ID: `workbench.debug.action.focusVariablesView`

When: `workbench.debug.variablesView.active`

---

### Focus on Watch View

ID: `workbench.debug.action.focusWatchView`

When: `workbench.debug.watchExpressionsView.active`

---

### Focus on Call Stack View

ID: `workbench.debug.action.focusCallStackView`

When: `workbench.debug.callStackView.active`

---

### Focus on Loaded Scripts View

ID: `workbench.debug.loadedScriptsView.focus`

When: `workbench.debug.loadedScriptsView.active`

---

### Focus on Breakpoints View

ID: `workbench.debug.action.focusBreakpointsView`

When: `workbench.debug.breakPointsView.active`

---

### Focus on Event Listener Breakpoints View

ID: `jsBrowserBreakpoints.focus`

When: `jsBrowserBreakpoints.active`

---

### Focus on Excluded Callers View

ID: `jsExcludedCallers.focus`

When: `jsExcludedCallers.active`

---

### Focus on Network View

ID: `jsDebugNetworkTree.focus`

When: `jsDebugNetworkTree.active`

## Search

### Clear Search History

ID: `search.action.clearHistory`

---

### Cancel Search

ID: `search.action.cancel`

Precondition: `searchState != '0'`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `listFocus && searchViewletVisible && !inputFocus && !treestickyScrollFocused`

---

### Refresh

ID: `search.action.refreshSearchResults`

Precondition: `viewHasSearchPattern`

---

### Collapse All

ID: `search.action.collapseSearchResults`

Precondition: `hasSearchResult && viewHasSomeCollapsibleResult`

---

### Expand All

ID: `search.action.expandSearchResults`

Precondition: `hasSearchResult && !viewHasSomeCollapsibleResult`

---

### Clear Search Results

ID: `search.action.clearSearchResults`

Precondition: `hasSearchResult || viewHasFilePattern || viewHasReplacePattern || viewHasSearchPattern`

---

### View as Tree

ID: `search.action.viewAsTree`

Precondition: `hasSearchResult && !inTreeView`

---

### View as List

ID: `search.action.viewAsList`

Precondition: `hasSearchResult && inTreeView`

---

### Search with AI

ID: `search.action.searchWithAI`

Precondition: `hasAIResultProviderKey`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `hasAIResultProviderKey && searchViewletFocus`

---

### Copy

ID: `search.action.copyMatch`

Default Keybinding:

- Windows: `Ctrl+C`
- Linux: `Ctrl+C`
- macOS: `Cmd+C`

When: `fileMatchOrMatchFocus`

---

### Copy Path

ID: `search.action.copyPath`

Default Keybinding:

- Windows: `Shift+Alt+C`
- Linux: `Ctrl+Alt+C`
- macOS: `Alt+Cmd+C`

When: `fileMatchOrFolderMatchWithResourceFocus`

---

### Copy All

ID: `search.action.copyAll`

---

### Get Search Results

ID: `search.action.getSearchResults`

---

### Restrict Search to Folder

ID: `search.action.restrictSearchToFolder`

Default Keybinding:

- Windows: `Shift+Alt+F`
- Linux: `Shift+Alt+F`
- macOS: `Shift+Alt+F`

When: `folderMatchWithResourceFocus && searchViewletVisible`

---

### Expand Recursively

ID: `search.action.expandRecursively`

---

### Exclude Folder from Search

ID: `search.action.excludeFromSearch`

---

### Exclude File Type from Search

ID: `search.action.excludeFileTypeFromSearch`

---

### Include File Type from Search

ID: `search.action.includeFileTypeInSearch`

---

### Reveal in Explorer View

ID: `search.action.revealInSideBar`

---

### Find in Files

ID: `workbench.action.findInFiles`

Default Keybinding:

- Windows: `Ctrl+Shift+F`
- Linux: `Ctrl+Shift+F`
- macOS: `Shift+Cmd+F`

---

### Find in Folder...

ID: `filesExplorer.findInFolder`

Default Keybinding:

- Windows: `Shift+Alt+F`
- Linux: `Shift+Alt+F`
- macOS: `Shift+Alt+F`

When: `explorerResourceIsFolder && filesExplorerFocus && foldersViewVisible && !inputFocus`

---

### Find in Workspace...

ID: `filesExplorer.findInWorkspace`

---

### Toggle Query Details

ID: `workbench.action.search.toggleQueryDetails`

Default Keybinding:

- Windows: `Ctrl+Shift+J`
- Linux: `Ctrl+Shift+J`
- macOS: `Shift+Cmd+J`

When: `inSearchEditor || searchViewletFocus`

---

### Close Replace Widget

ID: `closeReplaceInFilesWidget`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `replaceInputBoxFocus && searchViewletVisible`

---

### Toggle Case Sensitive

ID: `toggleSearchCaseSensitive`

Default Keybinding:

- Windows: `Alt+C`
- Linux: `Alt+C`
- macOS: `Alt+Cmd+C`

When: `searchViewletFocus`

---

### Toggle Whole Word

ID: `toggleSearchWholeWord`

Default Keybinding:

- Windows: `Alt+W`
- Linux: `Alt+W`
- macOS: `Alt+Cmd+W`

When: `searchViewletFocus`

---

### Toggle Regex

ID: `toggleSearchRegex`

Default Keybinding:

- Windows: `Alt+R`
- Linux: `Alt+R`
- macOS: `Alt+Cmd+R`

When: `searchViewletFocus`

---

### Toggle Preserve Case

ID: `toggleSearchPreserveCase`

Default Keybinding:

- Windows: `Alt+P`
- Linux: `Alt+P`
- macOS: `Alt+Cmd+P`

When: `searchViewletFocus`

---

### Open Match

ID: `search.action.openResult`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `fileMatchOrMatchFocus && searchViewletVisible`

---

### Open Match To Side

ID: `search.action.openResultToSide`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Ctrl+Enter`

When: `fileMatchOrMatchFocus && searchViewletVisible`

---

### Add Cursors at Search Results

ID: `addCursorsAtSearchResults`

Default Keybinding:

- Windows: `Ctrl+Shift+L`
- Linux: `Ctrl+Shift+L`
- macOS: `Shift+Cmd+L`

When: `fileMatchOrMatchFocus && searchViewletVisible`

---

### Focus Next Input

ID: `search.focus.nextInputBox`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible`

---

### Focus Previous Input

ID: `search.focus.previousInputBox`

Default Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow`

When: `inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible && !searchInputBoxFocus`

---

### Focus Search From Results

ID: `search.action.focusSearchFromResults`

Default Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow`

When: `accessibilityModeEnabled && searchViewletVisible || firstMatchFocus && searchViewletVisible`

---

### Toggle Search on Type

ID: `workbench.action.toggleSearchOnType`

---

### Focus List

ID: `search.action.focusSearchList`

---

### Focus Next Search Result

ID: `search.action.focusNextSearchResult`

Precondition: `hasSearchResult || inSearchEditor`

Default Keybinding:

- Windows: `F4`
- Linux: `F4`
- macOS: `F4`

---

### Focus Previous Search Result

ID: `search.action.focusPreviousSearchResult`

Precondition: `hasSearchResult || inSearchEditor`

Default Keybinding:

- Windows: `Shift+F4`
- Linux: `Shift+F4`
- macOS: `Shift+F4`

---

### Replace in Files

ID: `workbench.action.replaceInFiles`

Default Keybinding:

- Windows: `Ctrl+Shift+H`
- Linux: `Ctrl+Shift+H`
- macOS: `Shift+Cmd+H`

---

### Dismiss

ID: `search.action.remove`

Default Keybinding:

- Windows: `Delete`
- Linux: `Delete`
- macOS: `Cmd+Backspace`

When: `fileMatchOrMatchFocus && searchViewletVisible`

---

### Replace

ID: `search.action.replace`

Default Keybinding:

- Windows: `Ctrl+Shift+1`
- Linux: `Ctrl+Shift+1`
- macOS: `Shift+Cmd+1`

When: `isEditableItem && matchFocus && replaceActive && searchViewletVisible`

---

### Replace All

ID: `search.action.replaceAllInFile`

Default Keybinding:

- Windows: `Ctrl+Shift+1`
- Linux: `Ctrl+Shift+1`
- macOS: `Shift+Cmd+1`

Secondary Keybinding:

- Windows: `Ctrl+Shift+Enter`
- Linux: `Ctrl+Shift+Enter`
- macOS: `Shift+Cmd+Enter`

When: `fileMatchFocus && isEditableItem && replaceActive && searchViewletVisible`

---

### Replace All

ID: `search.action.replaceAllInFolder`

Default Keybinding:

- Windows: `Ctrl+Shift+1`
- Linux: `Ctrl+Shift+1`
- macOS: `Shift+Cmd+1`

Secondary Keybinding:

- Windows: `Ctrl+Shift+Enter`
- Linux: `Ctrl+Shift+Enter`
- macOS: `Shift+Cmd+Enter`

When: `folderMatchFocus && isEditableItem && replaceActive && searchViewletVisible`

---

### Quick Search

ID: `workbench.action.quickTextSearch`

---

### Focus on Search View

ID: `workbench.view.search.focus`

When: `workbench.view.search.active`

## Search Editor

### Delete File Results

ID: `search.searchEditor.action.deleteFileResults`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Ctrl+Shift+Backspace`
- Linux: `Ctrl+Shift+Backspace`
- macOS: `Shift+Cmd+Backspace`

---

### New Search Editor

ID: `search.action.openNewEditor`

---

### Open Search Editor

ID: `search.action.openEditor`

---

### Open New Search Editor to the Side

ID: `search.action.openNewEditorToSide`

---

### Open Results in Editor

ID: `search.action.openInEditor`

Default Keybinding:

- Windows: `Alt+Enter`
- Linux: `Alt+Enter`
- macOS: `Cmd+Enter`

When: `hasSearchResult && searchViewletFocus`

---

### Search Again

ID: `rerunSearchEditorSearch`

Default Keybinding:

- Windows: `Ctrl+Shift+R`
- Linux: `Ctrl+Shift+R`
- macOS: `Shift+Cmd+R`

When: `inSearchEditor`

---

### Focus Search Editor Input

ID: `search.action.focusQueryEditorWidget`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Focus Search Editor Files to Include

ID: `search.action.focusFilesToInclude`

Precondition: `inSearchEditor`

---

### Focus Search Editor Files to Exclude

ID: `search.action.focusFilesToExclude`

Precondition: `inSearchEditor`

---

### Toggle Match Case

ID: `toggleSearchEditorCaseSensitive`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Alt+C`
- Linux: `Alt+C`
- macOS: `Alt+Cmd+C`

When: `searchInputBoxFocus`

---

### Toggle Match Whole Word

ID: `toggleSearchEditorWholeWord`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Alt+W`
- Linux: `Alt+W`
- macOS: `Alt+Cmd+W`

When: `searchInputBoxFocus`

---

### Toggle Use Regular Expression

ID: `toggleSearchEditorRegex`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Alt+R`
- Linux: `Alt+R`
- macOS: `Alt+Cmd+R`

When: `searchInputBoxFocus`

---

### Toggle Context Lines

ID: `toggleSearchEditorContextLines`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Alt+L`
- Linux: `Alt+L`
- macOS: `Alt+Cmd+L`

---

### Increase Context Lines

ID: `increaseSearchEditorContextLines`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Alt+=`
- Linux: `Alt+=`
- macOS: `Alt+=`

---

### Decrease Context Lines

ID: `decreaseSearchEditorContextLines`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Alt+-`
- Linux: `Alt+-`
- macOS: `Alt+-`

---

### Select All Matches

ID: `selectAllSearchEditorMatches`

Precondition: `inSearchEditor`

Default Keybinding:

- Windows: `Ctrl+Shift+L`
- Linux: `Ctrl+Shift+L`
- macOS: `Shift+Cmd+L`

---

### Open New Search Editor

ID: `search.action.openNewEditorFromView`

## Settings Sync

### Open Local Backups Folder

ID: `workbench.userData.actions.openSyncBackupsFolder`

## Snippets

### Insert Snippet

ID: `editor.action.insertSnippet`

Precondition: `!editorReadonly`

---

### Surround with Snippet...

ID: `editor.action.surroundWithSnippet`

Precondition: `editorHasSelection && !editorReadonly`

---

### Fill File with Snippet

ID: `workbench.action.populateFileFromSnippet`

---

### Configure Snippets

ID: `workbench.action.openSnippets`

## Source Control

### Focus on Repositories View

ID: `workbench.scm.repositories.focus`

When: `workbench.scm.repositories.active`

---

### Focus on Changes View

ID: `workbench.scm.focus`

When: `workbench.scm.active`

---

### Focus on Graph View

ID: `workbench.scm.history.focus`

When: `workbench.scm.history.active`

## Tasks

### Manage Automatic Tasks

ID: `workbench.action.tasks.manageAutomaticRunning`

## Terminal

### Create New Terminal (In Active Workspace)

ID: `workbench.action.terminal.newInActiveWorkspace`

Precondition: `terminalProcessSupported`

---

### Create New Terminal in Editor Area

ID: `workbench.action.createTerminalEditor`

Precondition: `terminalProcessSupported`

---

### Create New Terminal in Editor Area

ID: `workbench.action.createTerminalEditorSameGroup`

Precondition: `terminalProcessSupported`

---

### Create New Terminal in Editor Area to the Side

ID: `workbench.action.createTerminalEditorSide`

Precondition: `terminalProcessSupported`

---

### New Terminal Window

ID: `workbench.action.terminal.newInNewWindow`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Shift+Alt+``
- Linux: `Ctrl+Shift+Alt+``
- macOS: `Ctrl+Shift+Alt+``

---

### Move Terminal into Editor Area

ID: `workbench.action.terminal.moveToEditor`

Precondition: `terminalHasBeenCreated && terminalIsOpen || terminalIsOpen && terminalProcessSupported`

---

### Move Terminal into New Window

ID: `workbench.action.terminal.moveIntoNewWindow`

Precondition: `terminalHasBeenCreated && terminalIsOpen || terminalIsOpen && terminalProcessSupported`

---

### Move Terminal into Panel

ID: `workbench.action.terminal.moveToTerminalPanel`

Precondition: `terminalEditorActive && terminalHasBeenCreated || terminalEditorActive && terminalProcessSupported`

---

### Focus Previous Terminal in Terminal Group

ID: `workbench.action.terminal.focusPreviousPane`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Alt+LeftArrow`
- Linux: `Alt+LeftArrow`
- macOS: `Alt+Cmd+LeftArrow`

Secondary Keybinding:

- Windows: `Alt+UpArrow`
- Linux: `Alt+UpArrow`
- macOS: `Alt+Cmd+UpArrow`

When: `terminalFocus && terminalSplitPaneActive`

---

### Focus Next Terminal in Terminal Group

ID: `workbench.action.terminal.focusNextPane`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Alt+RightArrow`
- Linux: `Alt+RightArrow`
- macOS: `Alt+Cmd+RightArrow`

Secondary Keybinding:

- Windows: `Alt+DownArrow`
- Linux: `Alt+DownArrow`
- macOS: `Alt+Cmd+DownArrow`

When: `terminalFocus && terminalSplitPaneActive`

---

### Resize Terminal Left

ID: `workbench.action.terminal.resizePaneLeft`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

When: `terminalFocus`

---

### Resize Terminal Right

ID: `workbench.action.terminal.resizePaneRight`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

When: `terminalFocus`

---

### Resize Terminal Up

ID: `workbench.action.terminal.resizePaneUp`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

When: `terminalFocus`

---

### Resize Terminal Down

ID: `workbench.action.terminal.resizePaneDown`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

When: `terminalFocus`

---

### Focus Terminal

ID: `workbench.action.terminal.focus`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `accessibilityModeEnabled && accessibleViewOnLastLine && accessibleViewCurrentProviderId == 'terminal'`

---

### Focus Terminal Tabs View

ID: `workbench.action.terminal.focusTabs`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Shift+\`
- Linux: `Ctrl+Shift+\`
- macOS: `Shift+Cmd+\`

When: `terminalFocus || terminalTabsFocus`

---

### Focus Next Terminal Group

ID: `workbench.action.terminal.focusNext`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+PageDown`
- Linux: `Ctrl+PageDown`
- macOS: `Shift+Cmd+]`

When: `terminalFocus && !terminalEditorFocus`

---

### Focus Previous Terminal Group

ID: `workbench.action.terminal.focusPrevious`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+PageUp`
- Linux: `Ctrl+PageUp`
- macOS: `Shift+Cmd+[`

When: `terminalFocus && !terminalEditorFocus`

---

### Run Selected Text In Active Terminal

ID: `workbench.action.terminal.runSelectedText`

Precondition: `terminalProcessSupported`

---

### Run Active File In Active Terminal

ID: `workbench.action.terminal.runActiveFile`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Scroll Down (Line)

ID: `workbench.action.terminal.scrollDown`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Alt+PageDown`
- Linux: `Ctrl+Shift+DownArrow`
- macOS: `Alt+Cmd+PageDown`

When: `terminalFocusInAny && !terminalAltBufferActive`

---

### Scroll Down (Page)

ID: `workbench.action.terminal.scrollDownPage`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Shift+PageDown`
- Linux: `Shift+PageDown`
- macOS: `PageDown`

When: `terminalFocusInAny && !terminalAltBufferActive`

---

### Scroll to Bottom

ID: `workbench.action.terminal.scrollToBottom`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+End`
- Linux: `Shift+End`
- macOS: `Cmd+End`

When: `terminalFocusInAny && !terminalAltBufferActive`

---

### Scroll Up (Line)

ID: `workbench.action.terminal.scrollUp`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Alt+PageUp`
- Linux: `Ctrl+Shift+UpArrow`
- macOS: `Alt+Cmd+PageUp`

When: `terminalFocusInAny && !terminalAltBufferActive`

---

### Scroll Up (Page)

ID: `workbench.action.terminal.scrollUpPage`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Shift+PageUp`
- Linux: `Shift+PageUp`
- macOS: `PageUp`

When: `terminalFocusInAny && !terminalAltBufferActive`

---

### Scroll to Top

ID: `workbench.action.terminal.scrollToTop`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Home`
- Linux: `Shift+Home`
- macOS: `Cmd+Home`

When: `terminalFocusInAny && !terminalAltBufferActive`

---

### Clear Selection

ID: `workbench.action.terminal.clearSelection`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `terminalFocusInAny && terminalTextSelected && !terminalFindVisible`

---

### Change Icon...

ID: `workbench.action.terminal.changeIcon`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Change Icon...

ID: `workbench.action.terminal.changeIconActiveTab`

Precondition: `terminalHasBeenCreated && terminalTabsSingularSelection || terminalProcessSupported && terminalTabsSingularSelection`

---

### Change Color...

ID: `workbench.action.terminal.changeColor`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Change Color...

ID: `workbench.action.terminal.changeColorActiveTab`

Precondition: `terminalHasBeenCreated && terminalTabsSingularSelection || terminalProcessSupported && terminalTabsSingularSelection`

---

### Rename...

ID: `workbench.action.terminal.rename`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Rename...

ID: `workbench.action.terminal.renameActiveTab`

Precondition: `terminalHasBeenCreated && terminalTabsSingularSelection || terminalProcessSupported && terminalTabsSingularSelection`

Default Keybinding:

- Windows: `F2`
- Linux: `F2`
- macOS: `Enter`

When: `terminalTabsFocus`

---

### Detach Session

ID: `workbench.action.terminal.detachSession`

Precondition: `terminalProcessSupported`

---

### Attach to Session

ID: `workbench.action.terminal.attachToSession`

Precondition: `terminalProcessSupported`

---

### Scroll to Previous Command

ID: `workbench.action.terminal.scrollToPreviousCommand`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow`

When: `terminalFocus && !accessibilityModeEnabled`

---

### Scroll to Next Command

ID: `workbench.action.terminal.scrollToNextCommand`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `terminalFocus && !accessibilityModeEnabled`

---

### Select to Previous Command

ID: `workbench.action.terminal.selectToPreviousCommand`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Shift+UpArrow`
- Linux: `Ctrl+Shift+UpArrow`
- macOS: `Shift+Cmd+UpArrow`

When: `terminalFocus`

---

### Select to Next Command

ID: `workbench.action.terminal.selectToNextCommand`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Shift+DownArrow`
- Linux: `Ctrl+Shift+DownArrow`
- macOS: `Shift+Cmd+DownArrow`

When: `terminalFocus`

---

### Select to Previous Line

ID: `workbench.action.terminal.selectToPreviousLine`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Select to Next Line

ID: `workbench.action.terminal.selectToNextLine`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Create New Terminal Starting in a Custom Working Directory

ID: `workbench.action.terminal.newWithCwd`

Precondition: `terminalProcessSupported`

---

### Rename the Currently Active Terminal

ID: `workbench.action.terminal.renameWithArg`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Relaunch Active Terminal

ID: `workbench.action.terminal.relaunch`

Precondition: `terminalProcessSupported`

---

### Split Terminal

ID: `workbench.action.terminal.split`

Precondition: `terminalProcessSupported || terminalWebExtensionContributedProfile`

Default Keybinding:

- Windows: `Ctrl+Shift+5`
- Linux: `Ctrl+Shift+5`
- macOS: `Cmd+\`

When: `terminalFocus`

---

### Split Terminal

ID: `workbench.action.terminal.splitActiveTab`

Precondition: `terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Shift+5`
- Linux: `Ctrl+Shift+5`
- macOS: `Cmd+\`

When: `terminalTabsFocus`

---

### Unsplit Terminal

ID: `workbench.action.terminal.unsplit`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Join Terminals

ID: `workbench.action.terminal.joinActiveTab`

Precondition: `terminalHasBeenCreated && !terminalTabsSingularSelection || terminalProcessSupported && !terminalTabsSingularSelection`

---

### Join Terminals...

ID: `workbench.action.terminal.join`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Split Terminal (In Active Workspace)

ID: `workbench.action.terminal.splitInActiveWorkspace`

Precondition: `terminalProcessSupported`

---

### Select All

ID: `workbench.action.terminal.selectAll`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

When: `terminalFocusInAny`

---

### Create New Terminal

ID: `workbench.action.terminal.new`

Precondition: `terminalProcessSupported || terminalWebExtensionContributedProfile`

Default Keybinding:

- Windows: `Ctrl+Shift+``
- Linux: `Ctrl+Shift+``
- macOS: `Ctrl+Shift+``

---

### Kill the Active Terminal Instance

ID: `workbench.action.terminal.kill`

Precondition: `terminalHasBeenCreated || terminalIsOpen || terminalProcessSupported`

---

### Kill Terminal

ID: `workbench.action.terminal.killViewOrEditor`

Precondition: `terminalHasBeenCreated || terminalIsOpen || terminalProcessSupported`

---

### Kill All Terminals

ID: `workbench.action.terminal.killAll`

Precondition: `terminalHasBeenCreated || terminalIsOpen || terminalProcessSupported`

---

### Kill the Active Terminal in Editor Area

ID: `workbench.action.terminal.killEditor`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+F4`
- Linux: `Ctrl+W`
- macOS: `Cmd+W`

Secondary Keybinding:

- Windows: `Ctrl+W`
- Linux: ``
- macOS: ``

When: `terminalEditorFocus && terminalFocus`

---

### Kill Terminal

ID: `workbench.action.terminal.killActiveTab`

Precondition: `terminalHasBeenCreated || terminalIsOpen || terminalProcessSupported`

Default Keybinding:

- Windows: `Delete`
- Linux: `Delete`
- macOS: `Cmd+Backspace`

When: `terminalTabsFocus`

---

### Focus Hover

ID: `workbench.action.terminal.focusHover`

Precondition: `terminalHasBeenCreated || terminalIsOpen || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+I`
- Linux: `Ctrl+K Ctrl+I`
- macOS: `Cmd+K Cmd+I`

When: `terminalFocus || terminalTabsFocus`

---

### Clear

ID: `workbench.action.terminal.clear`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

When: `terminalFocus && !accessibilityModeEnabled || accessibilityModeEnabled && accessibleViewIsShown && accessibleViewCurrentProviderId == 'terminal'`

---

### Select Default Profile

ID: `workbench.action.terminal.selectDefaultShell`

Precondition: `terminalProcessSupported`

---

### Configure Terminal Settings

ID: `workbench.action.terminal.openSettings`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Set Fixed Dimensions

ID: `workbench.action.terminal.setDimensions`

Precondition: `terminalHasBeenCreated && terminalIsOpen || terminalIsOpen && terminalProcessSupported`

---

### Toggle Size to Content Width

ID: `workbench.action.terminal.sizeToContentWidth`

Precondition: `terminalHasBeenCreated && terminalIsOpen || terminalIsOpen && terminalProcessSupported`

Default Keybinding:

- Windows: `Alt+Z`
- Linux: `Alt+Z`
- macOS: `Alt+Z`

When: `terminalFocus`

---

### Switch Terminal

ID: `workbench.action.terminal.switchTerminal`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Accessible Buffer Go to Next Command

ID: `workbench.action.terminal.accessibleBufferGoToNextCommand`

Precondition: `terminalHasBeenCreated || terminalProcessSupported || accessibleViewIsShown && accessibleViewCurrentProviderId == 'terminal'`

Default Keybinding:

- Windows: `Alt+DownArrow`
- Linux: `Alt+DownArrow`
- macOS: `Alt+DownArrow`

When: `accessibleViewIsShown && accessibleViewCurrentProviderId == 'terminal'`

---

### Accessible Buffer Go to Previous Command

ID: `workbench.action.terminal.accessibleBufferGoToPreviousCommand`

Precondition: `accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'`

Default Keybinding:

- Windows: `Alt+UpArrow`
- Linux: `Alt+UpArrow`
- macOS: `Alt+UpArrow`

When: `accessibleViewIsShown && accessibleViewCurrentProviderId == 'terminal'`

---

### Scroll to Accessible View Bottom

ID: `workbench.action.terminal.scrollToBottomAccessibleView`

Precondition: `accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'`

Default Keybinding:

- Windows: `Ctrl+End`
- Linux: `Shift+End`
- macOS: `Cmd+End`

When: `accessibleViewCurrentProviderId == 'terminal'`

---

### Scroll to Accessible View Top

ID: `workbench.action.terminal.scrollToTopAccessibleView`

Precondition: `accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'`

Default Keybinding:

- Windows: `Ctrl+Home`
- Linux: `Shift+Home`
- macOS: `Cmd+Home`

When: `accessibleViewCurrentProviderId == 'terminal'`

---

### Add Terminal Selection to Chat

ID: `workbench.action.terminal.chat.addTerminalSelection`

Precondition: `chatIsEnabled && terminalHasBeenCreated || chatIsEnabled && terminalProcessSupported`

---

### Show Environment Contributions

ID: `workbench.action.terminal.showEnvironmentContributions`

Precondition: `terminalProcessSupported`

---

### Copy Last Command

ID: `workbench.action.terminal.copyLastCommand`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Copy Last Command Output

ID: `workbench.action.terminal.copyLastCommandOutput`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Copy Last Command and Output

ID: `workbench.action.terminal.copyLastCommandAndLastCommandOutput`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Copy Selection

ID: `workbench.action.terminal.copySelection`

Precondition: `terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected || terminalProcessSupported && terminalTextSelected`

Default Keybinding:

- Windows: `Ctrl+Shift+C`
- Linux: `Ctrl+Shift+C`
- macOS: `Cmd+C`

When: `terminalTextSelectedInFocused || terminalFocus && terminalTextSelected`

---

### Copy and Clear Selection

ID: `workbench.action.terminal.copyAndClearSelection`

Precondition: `terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected || terminalProcessSupported && terminalTextSelected`

Default Keybinding:

- Windows: `Ctrl+C`
- Linux: ``
- macOS: ``

When: `terminalTextSelectedInFocused || terminalFocus && terminalTextSelected`

---

### Copy Selection as HTML

ID: `workbench.action.terminal.copySelectionAsHtml`

Precondition: `terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected || terminalProcessSupported && terminalTextSelected`

---

### Paste into Active Terminal

ID: `workbench.action.terminal.paste`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+V`
- Linux: `Ctrl+Shift+V`
- macOS: `Cmd+V`

Secondary Keybinding:

- Windows: `Ctrl+Shift+V`
- Linux: ``
- macOS: ``

When: `terminalFocus`

---

### Paste Selection into Active Terminal

ID: `workbench.action.terminal.pasteSelection`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

When: `terminalFocus`

---

### Focus Find

ID: `workbench.action.terminal.focusFind`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

When: `terminalFindFocused || terminalFocusInAny`

---

### Hide Find

ID: `workbench.action.terminal.hideFind`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

Secondary Keybinding:

- Windows: `Shift+Escape`
- Linux: `Shift+Escape`
- macOS: `Shift+Escape`

When: `terminalFindVisible && terminalFocusInAny`

---

### Toggle Find Using Regex

ID: `workbench.action.terminal.toggleFindRegex`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Alt+R`
- Linux: `Alt+R`
- macOS: `Alt+Cmd+R`

When: `terminalFindVisible`

---

### Toggle Find Using Whole Word

ID: `workbench.action.terminal.toggleFindWholeWord`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Alt+W`
- Linux: `Alt+W`
- macOS: `Alt+Cmd+W`

When: `terminalFindVisible`

---

### Toggle Find Using Case Sensitive

ID: `workbench.action.terminal.toggleFindCaseSensitive`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Alt+C`
- Linux: `Alt+C`
- macOS: `Alt+Cmd+C`

When: `terminalFindVisible`

---

### Find Next

ID: `workbench.action.terminal.findNext`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `F3`
- Linux: `F3`
- macOS: `Cmd+G`

When: `terminalFindFocused || terminalFocusInAny`

---

### Find Previous

ID: `workbench.action.terminal.findPrevious`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Shift+F3`
- Linux: `Shift+F3`
- macOS: `Shift+Cmd+G`

When: `terminalFindFocused || terminalFocusInAny`

---

### Search Workspace

ID: `workbench.action.terminal.searchWorkspace`

Precondition: `terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Shift+F`
- Linux: `Ctrl+Shift+F`
- macOS: `Shift+Cmd+F`

When: `terminalFocus && terminalProcessSupported && terminalTextSelected`

---

### Open Inline Chat

ID: `workbench.action.terminal.chat.start`

Precondition: `chatIsEnabled && terminalChatAgentRegistered && terminalHasBeenCreated || chatIsEnabled && terminalChatAgentRegistered && terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `terminalFocusInAny`

---

### View Chat Terminals

ID: `workbench.action.terminal.chat.viewChatTerminals`

---

### Clear Previous Session History

ID: `workbench.action.terminal.clearPreviousSessionHistory`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Go to Recent Directory...

ID: `workbench.action.terminal.goToRecentDirectory`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+G`
- Linux: `Ctrl+G`
- macOS: `Cmd+G`

When: `terminalFocus`

---

### Run Recent Command...

ID: `workbench.action.terminal.runRecentCommand`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+R`
- Linux: `Ctrl+R`
- macOS: `Cmd+R`

When: `accessibilityModeEnabled && terminalFocus || accessibilityModeEnabled && accessibleViewIsShown && accessibleViewCurrentProviderId == 'terminal'`

---

### Open Detected Link...

ID: `workbench.action.terminal.openDetectedLink`

Precondition: `terminalHasBeenCreated`

Default Keybinding:

- Windows: `Ctrl+Shift+O`
- Linux: `Ctrl+Shift+O`
- macOS: `Shift+Cmd+O`

When: `terminalFocus`

---

### Open Last URL Link

ID: `workbench.action.terminal.openUrlLink`

Precondition: `terminalHasBeenCreated`

---

### Open Last Local File Link

ID: `workbench.action.terminal.openFileLink`

Precondition: `terminalHasBeenCreated`

---

### Increase Font Size

ID: `workbench.action.terminal.fontZoomIn`

Precondition: `terminalProcessSupported`

---

### Decrease Font Size

ID: `workbench.action.terminal.fontZoomOut`

Precondition: `terminalProcessSupported`

---

### Reset Font Size

ID: `workbench.action.terminal.fontZoomReset`

Precondition: `terminalProcessSupported`

---

### Toggle Sticky Scroll

ID: `workbench.action.terminal.toggleStickyScroll`

Precondition: `terminalProcessSupported`

---

### Switch Active Terminal

ID: `workbench.action.quickOpenTerm`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

---

### Show Terminal Quick Fixes

ID: `workbench.action.terminal.showQuickFixes`

Precondition: `terminalFocus`

Default Keybinding:

- Windows: `Ctrl+.`
- Linux: `Ctrl+.`
- macOS: `Cmd+.`

---

### Send Sequence

ID: `workbench.action.terminal.sendSequence`

Precondition: `terminalProcessSupported`

---

### Send Signal

ID: `workbench.action.terminal.sendSignal`

Precondition: `terminalProcessSupported`

---

### Configure

ID: `workbench.action.terminal.configureSuggestSettings`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `Ctrl+Shift+,`
- Linux: `Ctrl+Shift+,`
- macOS: `Shift+Cmd+,`

---

### Learn More

ID: `workbench.action.terminal.suggestLearnMore`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `Ctrl+Shift+L`
- Linux: `Ctrl+Shift+L`
- macOS: `Shift+Cmd+L`

When: `terminalSuggestWidgetVisible`

---

### Request Completions

ID: `workbench.action.terminal.requestCompletions`

Precondition: `terminalProcessSupported`

Default Keybinding:

- Windows: `Ctrl+Space`
- Linux: `Ctrl+Space`
- macOS: `Ctrl+Space`

When: `config.terminal.integrated.suggest.enabled && terminalFocus && !terminalSuggestWidgetVisible`

---

### Reset Suggest Widget Size

ID: `workbench.action.terminal.resetSuggestWidgetSize`

Precondition: `terminalProcessSupported`

---

### Select the Previous Suggestion

ID: `workbench.action.terminal.selectPrevSuggestion`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `UpArrow`
- Linux: `UpArrow`
- macOS: `UpArrow`

When: `simpleSuggestWidgetHasNavigated || !config.terminal.integrated.suggest.upArrowNavigatesHistory`

---

### Select the Previous Page Suggestion

ID: `workbench.action.terminal.selectPrevPageSuggestion`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `PageUp`
- Linux: `PageUp`
- macOS: `PageUp`

---

### Select the Next Suggestion

ID: `workbench.action.terminal.selectNextSuggestion`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

---

### Suggest Toggle Explain Modes

ID: `terminalSuggestToggleExplainMode`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `Ctrl+/`
- Linux: `Ctrl+/`
- macOS: `Cmd+/`

---

### Suggest Toggle Suggestion Focus

ID: `workbench.action.terminal.suggestToggleDetailsFocus`

Precondition: `!textInputFocus`

Default Keybinding:

- Windows: `Ctrl+Alt+Space`
- Linux: `Ctrl+Alt+Space`
- macOS: `Ctrl+Alt+Space`

---

### Suggest Toggle Details

ID: `workbench.action.terminal.suggestToggleDetails`

Precondition: `simpleSuggestWidgetHasFocusedSuggestion && terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || simpleSuggestWidgetHasFocusedSuggestion && terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `Ctrl+Space`
- Linux: `Ctrl+Space`
- macOS: `Ctrl+Space`

Secondary Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

---

### Select the Next Page Suggestion

ID: `workbench.action.terminal.selectNextPageSuggestion`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `PageDown`
- Linux: `PageDown`
- macOS: `PageDown`

---

### Insert

ID: `workbench.action.terminal.acceptSelectedSuggestion`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `Tab`
- Linux: `Tab`
- macOS: `Tab`

When: `simpleSuggestWidgetHasFocusedSuggestion`

---

### Accept Selected Suggestion (Enter)

ID: `workbench.action.terminal.acceptSelectedSuggestionEnter`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `config.terminal.integrated.suggest.runOnEnter != 'never'`

---

### Hide Suggest Widget

ID: `workbench.action.terminal.hideSuggestWidget`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Hide Suggest Widget and Navigate History

ID: `workbench.action.terminal.hideSuggestWidgetAndNavigateHistory`

Precondition: `terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible`

Default Keybinding:

- Windows: `UpArrow`
- Linux: `UpArrow`
- macOS: `UpArrow`

When: `config.terminal.integrated.suggest.upArrowNavigatesHistory && !simpleSuggestWidgetHasNavigated`

---

### Start Dictation in Terminal

ID: `workbench.action.terminal.startVoice`

Precondition: `terminalHasBeenCreated && !speechToTextInProgress || terminalProcessSupported && !speechToTextInProgress`

---

### Stop Dictation in Terminal

ID: `workbench.action.terminal.stopVoice`

Precondition: `terminalDictationInProgress`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Focus on Terminal View

ID: `terminal.focus`

When: `terminal.active`

## Test

### Toggle Inline Coverage

ID: `testing.toggleInlineCoverage`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+Shift+I`
- Linux: `Ctrl+; Ctrl+Shift+I`
- macOS: `Cmd+; Shift+Cmd+I`

---

### Test Coverage Toolbar

ID: `testing.coverageToggleToolbar`

---

### Filter Coverage to Test

ID: `testing.coverageFilterToTestInEditor`

---

### Toggle Coverage in Explorer

ID: `testing.toggleCoverageInExplorer`

---

### Go to Next Uncovered Line

ID: `testing.coverage.goToNextMissedLine`

Precondition: `testing.hasCoverageInFile`

Default Keybinding:

- Windows: `Alt+F9`
- Linux: `Alt+F9`
- macOS: `Alt+F9`

When: `activeEditor`

---

### Go to Previous Uncovered Line

ID: `testing.coverage.goToPreviousMissedLine`

Precondition: `testing.hasCoverageInFile`

Default Keybinding:

- Windows: `Shift+Alt+F9`
- Linux: `Shift+Alt+F9`
- macOS: `Shift+Alt+F9`

When: `activeEditor`

---

### Filter Coverage by Test

ID: `testing.coverageFilterToTest`

---

### Cancel Test Refresh

ID: `testing.cancelTestRefresh`

---

### Cancel Test Run

ID: `testing.cancelRun`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+X`
- Linux: `Ctrl+; Ctrl+X`
- macOS: `Cmd+; Cmd+X`

---

### Clear Coverage

ID: `testing.coverage.close`

---

### Clear All Results

ID: `testing.clearTestResults`

---

### Configure Test Profiles

ID: `testing.configureProfile`

---

### Run All Tests with Coverage

ID: `testing.coverageAll`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+Shift+A`
- Linux: `Ctrl+; Ctrl+Shift+A`
- macOS: `Cmd+; Shift+Cmd+A`

---

### Run Test at Cursor with Coverage

ID: `testing.coverageAtCursor`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+Shift+C`
- Linux: `Ctrl+; Ctrl+Shift+C`
- macOS: `Cmd+; Shift+Cmd+C`

When: `editorTextFocus`

---

### Run Tests with Coverage in Current File

ID: `testing.coverageCurrentFile`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+Shift+F`
- Linux: `Ctrl+; Ctrl+Shift+F`
- macOS: `Cmd+; Shift+Cmd+F`

When: `editorTextFocus`

---

### Rerun Last Run with Coverage

ID: `testing.coverageLastRun`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+Shift+L`
- Linux: `Ctrl+; Ctrl+Shift+L`
- macOS: `Cmd+; Shift+Cmd+L`

---

### Run Tests with Coverage

ID: `testing.coverageSelected`

---

### Run Tests with Coverage

ID: `testing.coverage.uri`

---

### Debug All Tests

ID: `testing.debugAll`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+A`
- Linux: `Ctrl+; Ctrl+A`
- macOS: `Cmd+; Cmd+A`

---

### Debug Test at Cursor

ID: `testing.debugAtCursor`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+C`
- Linux: `Ctrl+; Ctrl+C`
- macOS: `Cmd+; Cmd+C`

When: `editorTextFocus`

---

### Debug Tests in Current File

ID: `testing.debugCurrentFile`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+F`
- Linux: `Ctrl+; Ctrl+F`
- macOS: `Cmd+; Cmd+F`

When: `editorTextFocus`

---

### Debug Failed Tests

ID: `testing.debugFailTests`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+E`
- Linux: `Ctrl+; Ctrl+E`
- macOS: `Cmd+; Cmd+E`

---

### Debug Last Run

ID: `testing.debugLastRun`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+L`
- Linux: `Ctrl+; Ctrl+L`
- macOS: `Cmd+; Cmd+L`

---

### Debug Tests

ID: `testing.debugSelected`

---

### Debug Tests

ID: `testing.debug.uri`

---

### Go to Related Code

ID: `testing.goToRelatedCode`

Precondition: `testing.activeEditorHasTests && testing.canGoToRelatedCode`

---

### Go to Related Test

ID: `testing.goToRelatedTest`

Precondition: `testing.canGoToRelatedTest && !testing.activeEditorHasTests`

---

### Open Coverage

ID: `testing.openCoverage`

---

### Peek Output

ID: `testing.openOutputPeek`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+M`
- Linux: `Ctrl+; Ctrl+M`
- macOS: `Cmd+; Cmd+M`

---

### Peek Related Code

ID: `testing.peekRelatedCode`

Precondition: `testing.activeEditorHasTests && testing.canGoToRelatedCode && !inReferenceSearchEditor && !isInEmbeddedEditor`

---

### Peek Related Test

ID: `testing.peekRelatedTest`

Precondition: `testing.canGoToRelatedTest && !inReferenceSearchEditor && !isInEmbeddedEditor && !testing.activeEditorHasTests`

---

### Refresh Tests

ID: `testing.refreshTests`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+R`
- Linux: `Ctrl+; Ctrl+R`
- macOS: `Cmd+; Cmd+R`

When: `testing.canRefresh`

---

### Rerun Failed Tests

ID: `testing.reRunFailTests`

Default Keybinding:

- Windows: `Ctrl+; E`
- Linux: `Ctrl+; E`
- macOS: `Cmd+; E`

---

### Rerun Last Run

ID: `testing.reRunLastRun`

Default Keybinding:

- Windows: `Ctrl+; L`
- Linux: `Ctrl+; L`
- macOS: `Cmd+; L`

---

### Run All Tests

ID: `testing.runAll`

Default Keybinding:

- Windows: `Ctrl+; A`
- Linux: `Ctrl+; A`
- macOS: `Cmd+; A`

---

### Run Test at Cursor

ID: `testing.runAtCursor`

Default Keybinding:

- Windows: `Ctrl+; C`
- Linux: `Ctrl+; C`
- macOS: `Cmd+; C`

When: `editorTextFocus`

---

### Run Tests in Current File

ID: `testing.runCurrentFile`

Default Keybinding:

- Windows: `Ctrl+; F`
- Linux: `Ctrl+; F`
- macOS: `Cmd+; F`

When: `editorTextFocus`

---

### Run Tests

ID: `testing.runSelected`

---

### Run Tests

ID: `testing.run.uri`

---

### Select Default Profile

ID: `testing.selectDefaultTestProfiles`

---

### Show Output

ID: `testing.showMostRecentOutput`

Precondition: `testing.hasAnyResults`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+O`
- Linux: `Ctrl+; Ctrl+O`
- macOS: `Cmd+; Cmd+O`

---

### Start Continuous Run

ID: `testing.startContinuousRun`

---

### Stop Continuous Run

ID: `testing.stopContinuousRun`

---

### Toggle Inline Test Output

ID: `testing.toggleInlineTestOutput`

Default Keybinding:

- Windows: `Ctrl+; Ctrl+I`
- Linux: `Ctrl+; Ctrl+I`
- macOS: `Cmd+; Cmd+I`

---

### Toggle Tree Position

ID: `testing.toggleResultsViewLayout`

---

### Rerun Failed Tests from Last Run

ID: `testing.reRunFailedFromLastRun`

---

### Debug Failed Tests from Last Run

ID: `testing.debugFailedFromLastRun`

---

### Open in Editor

ID: `testing.openMessageInEditor`

---

### Go to Previous Test Failure

ID: `testing.goToPreviousMessage`

Default Keybinding:

- Windows: `Shift+Alt+F8`
- Linux: `Shift+Alt+F8`
- macOS: `Shift+Alt+F8`

When: `editorFocus && testing.isPeekVisible`

---

### Go to Next Test Failure

ID: `testing.goToNextMessage`

Default Keybinding:

- Windows: `Alt+F8`
- Linux: `Alt+F8`
- macOS: `Alt+F8`

When: `editorFocus && testing.isPeekVisible`

---

### Toggle Test History in Peek

ID: `testing.toggleTestingPeekHistory`

Default Keybinding:

- Windows: `Alt+H`
- Linux: `Alt+H`
- macOS: `Alt+H`

When: `testing.isPeekVisible`

---

### Collapse Stack Frames

ID: `testing.collapsePeekStack`

## Test Results

### Focus on Test Results View

ID: `workbench.panel.testResults.view.focus`

When: `workbench.panel.testResults.view.active`

## Testing

### Focus on Test Explorer View

ID: `workbench.view.testing.focus`

When: `workbench.view.testing.active`

---

### Focus on Test Coverage View

ID: `workbench.view.testCoverage.focus`

When: `workbench.view.testCoverage.active`

## View

### Toggle Editor Sticky Scroll

ID: `editor.action.toggleStickyScroll`

---

### Toggle Panel Visibility

ID: `workbench.action.togglePanel`

Default Keybinding:

- Windows: `Ctrl+J`
- Linux: `Ctrl+J`
- macOS: `Cmd+J`

---

### Hide Panel

ID: `workbench.action.closePanel`

Precondition: `panelVisible`

---

### Focus into Panel

ID: `workbench.action.focusPanel`

---

### Move Panel To Top

ID: `workbench.action.positionPanelTop`

---

### Move Panel Left

ID: `workbench.action.positionPanelLeft`

---

### Move Panel Right

ID: `workbench.action.positionPanelRight`

---

### Move Panel To Bottom

ID: `workbench.action.positionPanelBottom`

---

### Set Panel Alignment to Left

ID: `workbench.action.alignPanelLeft`

---

### Set Panel Alignment to Right

ID: `workbench.action.alignPanelRight`

---

### Set Panel Alignment to Center

ID: `workbench.action.alignPanelCenter`

---

### Set Panel Alignment to Justify

ID: `workbench.action.alignPanelJustify`

---

### Previous Panel View

ID: `workbench.action.previousPanelView`

---

### Next Panel View

ID: `workbench.action.nextPanelView`

---

### Toggle Maximized Panel

ID: `workbench.action.toggleMaximizedPanel`

Precondition: `panelAlignment == 'center' || panelPosition != 'bottom' && panelPosition != 'top'`

---

### Move Panel Views To Secondary Side Bar

ID: `workbench.action.movePanelToSidePanel`

---

### Move Panel Views To Secondary Side Bar

ID: `workbench.action.movePanelToSecondarySideBar`

---

### Move Secondary Side Bar Views To Panel

ID: `workbench.action.moveSidePanelToPanel`

---

### Move Secondary Side Bar Views To Panel

ID: `workbench.action.moveSecondarySideBarToPanel`

---

### Toggle Secondary Side Bar Visibility

ID: `workbench.action.toggleAuxiliaryBar`

Default Keybinding:

- Windows: `Ctrl+Alt+B`
- Linux: `Ctrl+Alt+B`
- macOS: `Alt+Cmd+B`

---

### Hide Secondary Side Bar

ID: `workbench.action.closeAuxiliaryBar`

Precondition: `auxiliaryBarVisible`

---

### Focus into Secondary Side Bar

ID: `workbench.action.focusAuxiliaryBar`

---

### Previous Secondary Side Bar View

ID: `workbench.action.previousAuxiliaryBarView`

---

### Next Secondary Side Bar View

ID: `workbench.action.nextAuxiliaryBarView`

---

### Maximize Secondary Side Bar

ID: `workbench.action.maximizeAuxiliaryBar`

Precondition: `!auxiliaryBarMaximized`

---

### Restore Secondary Side Bar

ID: `workbench.action.restoreAuxiliaryBar`

Precondition: `auxiliaryBarMaximized`

---

### Toggle Maximized Secondary Side Bar

ID: `workbench.action.toggleMaximizedAuxiliaryBar`

---

### Toggle Centered Layout

ID: `workbench.action.toggleCenteredLayout`

Precondition: `!isAuxiliaryWindowFocusedContext`

---

### Toggle Primary Side Bar Position

ID: `workbench.action.toggleSidebarPosition`

---

### Toggle Editor Area Visibility

ID: `workbench.action.toggleEditorVisibility`

Precondition: `!isAuxiliaryWindowFocusedContext && panelAlignment == 'center' || !isAuxiliaryWindowFocusedContext && panelPosition != 'bottom'`

---

### Toggle Primary Side Bar Visibility

ID: `workbench.action.toggleSidebarVisibility`

Default Keybinding:

- Windows: `Ctrl+B`
- Linux: `Ctrl+B`
- macOS: `Cmd+B`

---

### Toggle Status Bar Visibility

ID: `workbench.action.toggleStatusbarVisibility`

---

### Hide Editor Tabs

ID: `workbench.action.hideEditorTabs`

Precondition: `!inZenMode && config.workbench.editor.showTabs != 'none'`

---

### Hide Editor Tabs in Zen Mode

ID: `workbench.action.zenHideEditorTabs`

Precondition: `inZenMode && config.zenMode.showTabs != 'none'`

---

### Show Multiple Editor Tabs

ID: `workbench.action.showMultipleEditorTabs`

Precondition: `!inZenMode && config.workbench.editor.showTabs != 'multiple'`

---

### Show Multiple Editor Tabs in Zen Mode

ID: `workbench.action.zenShowMultipleEditorTabs`

Precondition: `inZenMode && config.zenMode.showTabs != 'multiple'`

---

### Show Single Editor Tab

ID: `workbench.action.showEditorTab`

Precondition: `!inZenMode && config.workbench.editor.showTabs != 'single'`

---

### Show Single Editor Tab in Zen Mode

ID: `workbench.action.zenShowEditorTab`

Precondition: `inZenMode && config.zenMode.showTabs != 'single'`

---

### Move Editor Actions to Title Bar

ID: `workbench.action.editorActionsTitleBar`

Precondition: `config.workbench.editor.editorActionsLocation != 'titleBar'`

---

### Move Editor Actions to Tab Bar

ID: `workbench.action.editorActionsDefault`

Precondition: `config.workbench.editor.editorActionsLocation != 'default' && config.workbench.editor.showTabs != 'none'`

---

### Hide Editor Actions

ID: `workbench.action.hideEditorActions`

Precondition: `config.workbench.editor.editorActionsLocation != 'hidden'`

---

### Show Editor Actions

ID: `workbench.action.showEditorActions`

Precondition: `config.workbench.editor.editorActionsLocation == 'hidden'`

---

### Configure Tabs

ID: `workbench.action.configureEditorTabs`

---

### Configure Editors

ID: `workbench.action.configureEditor`

---

### Separate Pinned Editor Tabs

ID: `workbench.action.toggleSeparatePinnedEditorTabs`

Precondition: `config.workbench.editor.showTabs == 'multiple'`

---

### Toggle Zen Mode

ID: `workbench.action.toggleZenMode`

Precondition: `!isAuxiliaryWindowFocusedContext`

Default Keybinding:

- Windows: `Ctrl+K Z`
- Linux: `Ctrl+K Z`
- macOS: `Cmd+K Z`

---

### Toggle Menu Bar

ID: `workbench.action.toggleMenuBar`

---

### Reset View Locations

ID: `workbench.action.resetViewLocations`

---

### Move View

ID: `workbench.action.moveView`

---

### Move Focused View

ID: `workbench.action.moveFocusedView`

Precondition: `focusedView != ''`

---

### Reset Focused View Location

ID: `workbench.action.resetFocusedViewLocation`

Precondition: `focusedView != ''`

---

### Toggle Tree Sticky Scroll

ID: `tree.toggleStickyScroll`

---

### Navigate to the View on the Left

ID: `workbench.action.navigateLeft`

---

### Navigate to the View on the Right

ID: `workbench.action.navigateRight`

---

### Navigate to the View Above

ID: `workbench.action.navigateUp`

---

### Navigate to the View Below

ID: `workbench.action.navigateDown`

---

### Focus Next Part

ID: `workbench.action.focusNextPart`

Default Keybinding:

- Windows: `F6`
- Linux: `F6`
- macOS: `F6`

---

### Focus Previous Part

ID: `workbench.action.focusPreviousPart`

Default Keybinding:

- Windows: `Shift+F6`
- Linux: `Shift+F6`
- macOS: `Shift+F6`

---

### Toggle Full Screen

ID: `workbench.action.toggleFullScreen`

Precondition: `!isIOS`

Default Keybinding:

- Windows: `F11`
- Linux: `F11`
- macOS: `Ctrl+Cmd+F`

---

### Open Next Editor

ID: `workbench.action.nextEditor`

Default Keybinding:

- Windows: `Ctrl+PageDown`
- Linux: `Ctrl+PageDown`
- macOS: `Alt+Cmd+RightArrow`

---

### Open Previous Editor

ID: `workbench.action.previousEditor`

Default Keybinding:

- Windows: `Ctrl+PageUp`
- Linux: `Ctrl+PageUp`
- macOS: `Alt+Cmd+LeftArrow`

---

### Open Next Editor in Group

ID: `workbench.action.nextEditorInGroup`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+PageDown`
- Linux: `Ctrl+K Ctrl+PageDown`
- macOS: `Cmd+K Alt+Cmd+RightArrow`

---

### Open Previous Editor in Group

ID: `workbench.action.previousEditorInGroup`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+PageUp`
- Linux: `Ctrl+K Ctrl+PageUp`
- macOS: `Cmd+K Alt+Cmd+LeftArrow`

---

### Open First Editor in Group

ID: `workbench.action.firstEditorInGroup`

---

### Open Last Editor in Group

ID: `workbench.action.lastEditorInGroup`

Default Keybinding:

- Windows: `Alt+0`
- Linux: `Alt+0`
- macOS: `Ctrl+0`

Secondary Keybinding:

- Windows: `Ctrl+9`
- Linux: `Ctrl+9`
- macOS: `Cmd+9`

---

### Open Next Recently Used Editor

ID: `workbench.action.openNextRecentlyUsedEditor`

---

### Open Previous Recently Used Editor

ID: `workbench.action.openPreviousRecentlyUsedEditor`

---

### Open Next Recently Used Editor In Group

ID: `workbench.action.openNextRecentlyUsedEditorInGroup`

---

### Open Previous Recently Used Editor In Group

ID: `workbench.action.openPreviousRecentlyUsedEditorInGroup`

---

### Reopen Closed Editor

ID: `workbench.action.reopenClosedEditor`

Default Keybinding:

- Windows: `Ctrl+Shift+T`
- Linux: `Ctrl+Shift+T`
- macOS: `Shift+Cmd+T`

---

### Show All Editors By Most Recently Used

ID: `workbench.action.showAllEditorsByMostRecentlyUsed`

---

### Show Editors in Active Group By Most Recently Used

ID: `workbench.action.showEditorsInActiveGroup`

---

### Close All Editors

ID: `workbench.action.closeAllEditors`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+W`
- Linux: `Ctrl+K Ctrl+W`
- macOS: `Cmd+K Cmd+W`

---

### Close All Editor Groups

ID: `workbench.action.closeAllGroups`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Shift+W`
- Linux: `Ctrl+K Ctrl+Shift+W`
- macOS: `Cmd+K Shift+Cmd+W`

---

### Close Editors to the Left in Group

ID: `workbench.action.closeEditorsToTheLeft`

---

### Close Editors in Other Groups

ID: `workbench.action.closeEditorsInOtherGroups`

---

### Close Editor in All Groups

ID: `workbench.action.closeEditorInAllGroups`

---

### Revert and Close Editor

ID: `workbench.action.revertAndCloseActiveEditor`

---

### Split Editor

ID: `workbench.action.splitEditor`

Default Keybinding:

- Windows: `Ctrl+\`
- Linux: `Ctrl+\`
- macOS: `Cmd+\`

---

### Split Editor Orthogonal

ID: `workbench.action.splitEditorOrthogonal`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+\`
- Linux: `Ctrl+K Ctrl+\`
- macOS: `Cmd+K Cmd+\`

---

### Split Editor Left

ID: `workbench.action.splitEditorLeft`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+\`
- Linux: `Ctrl+K Ctrl+\`
- macOS: `Cmd+K Cmd+\`

---

### Split Editor Right

ID: `workbench.action.splitEditorRight`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+\`
- Linux: `Ctrl+K Ctrl+\`
- macOS: `Cmd+K Cmd+\`

---

### Split Editor Up

ID: `workbench.action.splitEditorUp`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+\`
- Linux: `Ctrl+K Ctrl+\`
- macOS: `Cmd+K Cmd+\`

---

### Split Editor Down

ID: `workbench.action.splitEditorDown`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+\`
- Linux: `Ctrl+K Ctrl+\`
- macOS: `Cmd+K Cmd+\`

---

### Join Editor Group with Next Group

ID: `workbench.action.joinTwoGroups`

---

### Join All Editor Groups

ID: `workbench.action.joinAllGroups`

---

### Navigate Between Editor Groups

ID: `workbench.action.navigateEditorGroups`

---

### Reset Editor Group Sizes

ID: `workbench.action.evenEditorWidths`

---

### Toggle Editor Group Sizes

ID: `workbench.action.toggleEditorWidths`

---

### Maximize Editor Group and Hide Side Bars

ID: `workbench.action.maximizeEditorHideSidebar`

Precondition: `auxiliaryBarVisible || sideBarVisible || editorPartMultipleEditorGroups && !editorPartMaximizedEditorGroup`

---

### Toggle Maximize Editor Group

ID: `workbench.action.toggleMaximizeEditorGroup`

Precondition: `editorPartMaximizedEditorGroup || editorPartMultipleEditorGroups`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+M`
- Linux: `Ctrl+K Ctrl+M`
- macOS: `Cmd+K Cmd+M`

---

### Expand Editor Group

ID: `workbench.action.minimizeOtherEditors`

Precondition: `multipleEditorGroups`

---

### Expand Editor Group and Hide Side Bars

ID: `workbench.action.minimizeOtherEditorsHideSidebar`

Precondition: `auxiliaryBarVisible || multipleEditorGroups || sideBarVisible`

---

### Move Editor Left

ID: `workbench.action.moveEditorLeftInGroup`

Default Keybinding:

- Windows: `Ctrl+Shift+PageUp`
- Linux: `Ctrl+Shift+PageUp`
- macOS: `Cmd+K Shift+Cmd+LeftArrow`

---

### Move Editor Right

ID: `workbench.action.moveEditorRightInGroup`

Default Keybinding:

- Windows: `Ctrl+Shift+PageDown`
- Linux: `Ctrl+Shift+PageDown`
- macOS: `Cmd+K Shift+Cmd+RightArrow`

---

### Move Editor Group Left

ID: `workbench.action.moveActiveEditorGroupLeft`

Default Keybinding:

- Windows: `Ctrl+K LeftArrow`
- Linux: `Ctrl+K LeftArrow`
- macOS: `Cmd+K LeftArrow`

---

### Move Editor Group Right

ID: `workbench.action.moveActiveEditorGroupRight`

Default Keybinding:

- Windows: `Ctrl+K RightArrow`
- Linux: `Ctrl+K RightArrow`
- macOS: `Cmd+K RightArrow`

---

### Move Editor Group Up

ID: `workbench.action.moveActiveEditorGroupUp`

Default Keybinding:

- Windows: `Ctrl+K UpArrow`
- Linux: `Ctrl+K UpArrow`
- macOS: `Cmd+K UpArrow`

---

### Move Editor Group Down

ID: `workbench.action.moveActiveEditorGroupDown`

Default Keybinding:

- Windows: `Ctrl+K DownArrow`
- Linux: `Ctrl+K DownArrow`
- macOS: `Cmd+K DownArrow`

---

### Duplicate Editor Group Left

ID: `workbench.action.duplicateActiveEditorGroupLeft`

---

### Duplicate Editor Group Right

ID: `workbench.action.duplicateActiveEditorGroupRight`

---

### Duplicate Editor Group Up

ID: `workbench.action.duplicateActiveEditorGroupUp`

---

### Duplicate Editor Group Down

ID: `workbench.action.duplicateActiveEditorGroupDown`

---

### Move Editor into Previous Group

ID: `workbench.action.moveEditorToPreviousGroup`

Default Keybinding:

- Windows: `Ctrl+Alt+LeftArrow`
- Linux: `Ctrl+Alt+LeftArrow`
- macOS: `Ctrl+Cmd+LeftArrow`

---

### Move Editor into Next Group

ID: `workbench.action.moveEditorToNextGroup`

Default Keybinding:

- Windows: `Ctrl+Alt+RightArrow`
- Linux: `Ctrl+Alt+RightArrow`
- macOS: `Ctrl+Cmd+RightArrow`

---

### Move Editor into First Group

ID: `workbench.action.moveEditorToFirstGroup`

Default Keybinding:

- Windows: `Shift+Alt+1`
- Linux: `Shift+Alt+1`
- macOS: `Ctrl+Cmd+1`

---

### Move Editor into Last Group

ID: `workbench.action.moveEditorToLastGroup`

Default Keybinding:

- Windows: `Shift+Alt+9`
- Linux: `Shift+Alt+9`
- macOS: `Ctrl+Cmd+9`

---

### Move Editor into Left Group

ID: `workbench.action.moveEditorToLeftGroup`

---

### Move Editor into Right Group

ID: `workbench.action.moveEditorToRightGroup`

---

### Move Editor into Group Above

ID: `workbench.action.moveEditorToAboveGroup`

---

### Move Editor into Group Below

ID: `workbench.action.moveEditorToBelowGroup`

---

### Split Editor into Previous Group

ID: `workbench.action.splitEditorToPreviousGroup`

---

### Split Editor into Next Group

ID: `workbench.action.splitEditorToNextGroup`

---

### Split Editor into First Group

ID: `workbench.action.splitEditorToFirstGroup`

---

### Split Editor into Last Group

ID: `workbench.action.splitEditorToLastGroup`

---

### Split Editor into Left Group

ID: `workbench.action.splitEditorToLeftGroup`

---

### Split Editor into Right Group

ID: `workbench.action.splitEditorToRightGroup`

---

### Split Editor into Group Above

ID: `workbench.action.splitEditorToAboveGroup`

---

### Split Editor into Group Below

ID: `workbench.action.splitEditorToBelowGroup`

---

### Focus Active Editor Group

ID: `workbench.action.focusActiveEditorGroup`

---

### Focus First Editor Group

ID: `workbench.action.focusFirstEditorGroup`

Default Keybinding:

- Windows: `Ctrl+1`
- Linux: `Ctrl+1`
- macOS: `Cmd+1`

---

### Focus Last Editor Group

ID: `workbench.action.focusLastEditorGroup`

---

### Focus Previous Editor Group

ID: `workbench.action.focusPreviousGroup`

---

### Focus Next Editor Group

ID: `workbench.action.focusNextGroup`

---

### Focus Left Editor Group

ID: `workbench.action.focusLeftGroup`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+LeftArrow`
- Linux: `Ctrl+K Ctrl+LeftArrow`
- macOS: `Cmd+K Cmd+LeftArrow`

---

### Focus Right Editor Group

ID: `workbench.action.focusRightGroup`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+RightArrow`
- Linux: `Ctrl+K Ctrl+RightArrow`
- macOS: `Cmd+K Cmd+RightArrow`

---

### Focus Editor Group Above

ID: `workbench.action.focusAboveGroup`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+UpArrow`
- Linux: `Ctrl+K Ctrl+UpArrow`
- macOS: `Cmd+K Cmd+UpArrow`

---

### Focus Editor Group Below

ID: `workbench.action.focusBelowGroup`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+DownArrow`
- Linux: `Ctrl+K Ctrl+DownArrow`
- macOS: `Cmd+K Cmd+DownArrow`

---

### New Editor Group to the Left

ID: `workbench.action.newGroupLeft`

---

### New Editor Group to the Right

ID: `workbench.action.newGroupRight`

---

### New Editor Group Above

ID: `workbench.action.newGroupAbove`

---

### New Editor Group Below

ID: `workbench.action.newGroupBelow`

---

### Single Column Editor Layout

ID: `workbench.action.editorLayoutSingle`

---

### Two Columns Editor Layout

ID: `workbench.action.editorLayoutTwoColumns`

---

### Three Columns Editor Layout

ID: `workbench.action.editorLayoutThreeColumns`

---

### Two Rows Editor Layout

ID: `workbench.action.editorLayoutTwoRows`

---

### Three Rows Editor Layout

ID: `workbench.action.editorLayoutThreeRows`

---

### Grid Editor Layout (2x2)

ID: `workbench.action.editorLayoutTwoByTwoGrid`

---

### Two Rows Right Editor Layout

ID: `workbench.action.editorLayoutTwoRowsRight`

---

### Two Columns Bottom Editor Layout

ID: `workbench.action.editorLayoutTwoColumnsBottom`

---

### Toggle Editor Type

ID: `workbench.action.toggleEditorType`

Precondition: `activeEditorAvailableEditorIds`

---

### Reopen Editor with Text Editor

ID: `workbench.action.reopenTextEditor`

Precondition: `activeEditorAvailableEditorIds`

---

### Quick Open Previous Recently Used Editor

ID: `workbench.action.quickOpenPreviousRecentlyUsedEditor`

---

### Quick Open Least Recently Used Editor

ID: `workbench.action.quickOpenLeastRecentlyUsedEditor`

---

### Quick Open Previous Recently Used Editor in Group

ID: `workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup`

Precondition: `!activeEditorGroupEmpty`

Default Keybinding:

- Windows: `Ctrl+Tab`
- Linux: `Ctrl+Tab`
- macOS: `Ctrl+Tab`

---

### Quick Open Least Recently Used Editor in Group

ID: `workbench.action.quickOpenLeastRecentlyUsedEditorInGroup`

Precondition: `!activeEditorGroupEmpty`

Default Keybinding:

- Windows: `Ctrl+Shift+Tab`
- Linux: `Ctrl+Shift+Tab`
- macOS: `Ctrl+Shift+Tab`

---

### Move Editor into New Window

ID: `workbench.action.moveEditorToNewWindow`

Precondition: `activeEditor`

---

### Copy Editor into New Window

ID: `workbench.action.copyEditorToNewWindow`

Precondition: `activeEditor`

Default Keybinding:

- Windows: `Ctrl+K O`
- Linux: `Ctrl+K O`
- macOS: `Cmd+K O`

---

### Move Editor Group into New Window

ID: `workbench.action.moveEditorGroupToNewWindow`

---

### Copy Editor Group into New Window

ID: `workbench.action.copyEditorGroupToNewWindow`

---

### Restore Editors into Main Window

ID: `workbench.action.restoreEditorsToMainWindow`

Precondition: `isAuxiliaryWindowFocusedContext`

---

### New Empty Editor Window

ID: `workbench.action.newEmptyEditorWindow`

---

### Toggle Editor Group Lock

ID: `workbench.action.toggleEditorGroupLock`

---

### Lock Editor Group

ID: `workbench.action.lockEditorGroup`

Precondition: `!activeEditorGroupLocked`

---

### Unlock Editor Group

ID: `workbench.action.unlockEditorGroup`

Precondition: `activeEditorGroupLocked`

---

### Split Editor in Group

ID: `workbench.action.splitEditorInGroup`

Precondition: `activeEditorCanSplitInGroup`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Shift+\`
- Linux: `Ctrl+K Ctrl+Shift+\`
- macOS: `Cmd+K Shift+Cmd+\`

When: `activeEditorCanSplitInGroup`

---

### Join Editor in Group

ID: `workbench.action.joinEditorInGroup`

Precondition: `sideBySideEditorActive`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Shift+\`
- Linux: `Ctrl+K Ctrl+Shift+\`
- macOS: `Cmd+K Shift+Cmd+\`

When: `sideBySideEditorActive`

---

### Toggle Split Editor in Group

ID: `workbench.action.toggleSplitEditorInGroup`

Precondition: `activeEditorCanSplitInGroup || sideBySideEditorActive`

---

### Toggle Layout of Split Editor in Group

ID: `workbench.action.toggleSplitEditorInGroupLayout`

Precondition: `sideBySideEditorActive`

---

### Focus First Side in Active Editor

ID: `workbench.action.focusFirstSideEditor`

Precondition: `sideBySideEditorActive || textCompareEditorActive`

---

### Focus Second Side in Active Editor

ID: `workbench.action.focusSecondSideEditor`

Precondition: `sideBySideEditorActive || textCompareEditorActive`

---

### Focus Other Side in Active Editor

ID: `workbench.action.focusOtherSideEditor`

Precondition: `sideBySideEditorActive || textCompareEditorActive`

---

### Toggle Breadcrumbs

ID: `breadcrumbs.toggle`

---

### Toggle Window Compact Mode

ID: `workbench.action.toggleCompactAuxiliaryWindow`

Precondition: `isAuxiliaryWindowFocusedContext`

---

### Close Primary Side Bar

ID: `workbench.action.closeSidebar`

Precondition: `sideBarVisible`

---

### Focus into Primary Side Bar

ID: `workbench.action.focusSideBar`

Default Keybinding:

- Windows: `Ctrl+0`
- Linux: `Ctrl+0`
- macOS: `Cmd+0`

---

### Move Activity Bar to Side

ID: `workbench.action.activityBarLocation.default`

---

### Move Activity Bar to Top

ID: `workbench.action.activityBarLocation.top`

---

### Move Activity Bar to Bottom

ID: `workbench.action.activityBarLocation.bottom`

---

### Hide Activity Bar

ID: `workbench.action.activityBarLocation.hide`

---

### Previous Primary Side Bar View

ID: `workbench.action.previousSideBarView`

---

### Next Primary Side Bar View

ID: `workbench.action.nextSideBarView`

---

### Focus Activity Bar

ID: `workbench.action.focusActivityBar`

---

### Focus Banner

ID: `workbench.action.focusBanner`

---

### Focus Status Bar

ID: `workbench.action.focusStatusBar`

---

### Reset All Menus

ID: `menu.resetHiddenStates`

---

### Toggle Notebook Sticky Scroll

ID: `notebook.action.toggleNotebookStickyScroll`

---

### Open View

ID: `workbench.action.openView`

---

### Quick Open View

ID: `workbench.action.quickOpenView`

Default Keybinding:

- Windows: `Ctrl+Q`
- Linux: `Ctrl+Q`
- macOS: `Ctrl+Q`

---

### Focus Problems (Errors, Warnings, Infos)

ID: `workbench.action.problems.focus`

---

### Toggle Minimap

ID: `editor.action.toggleMinimap`

---

### Toggle Overtype/Insert Mode

ID: `editor.action.toggleOvertypeInsertMode`

Default Keybinding:

- Windows: `Insert`
- Linux: `Insert`
- macOS: `Alt+Cmd+O`

---

### Toggle Control Characters

ID: `editor.action.toggleRenderControlCharacter`

---

### Toggle Render Whitespace

ID: `editor.action.toggleRenderWhitespace`

---

### Reset Language Status Interaction Counter

ID: `editor.inlayHints.Reset`

---

### Zoom In

ID: `workbench.action.zoomIn`

Default Keybinding:

- Windows: `Ctrl+=`
- Linux: `Ctrl+=`
- macOS: `Cmd+=`

Secondary Keybinding:

- Windows: `Ctrl+Shift+=, Ctrl+NumPad_Add`
- Linux: `Ctrl+Shift+=, Ctrl+NumPad_Add`
- macOS: `Shift+Cmd+=, Cmd+NumPad_Add`

---

### Zoom Out

ID: `workbench.action.zoomOut`

Default Keybinding:

- Windows: `Ctrl+-`
- Linux: `Ctrl+-`
- macOS: `Cmd+-`

Secondary Keybinding:

- Windows: `Ctrl+Shift+-, Ctrl+NumPad_Subtract`
- Linux: `Ctrl+NumPad_Subtract`
- macOS: `Shift+Cmd+-, Cmd+NumPad_Subtract`

---

### Reset Zoom

ID: `workbench.action.zoomReset`

Default Keybinding:

- Windows: `Ctrl+NumPad0`
- Linux: `Ctrl+NumPad0`
- macOS: `Cmd+NumPad0`

---

### Toggle Chat

ID: `workbench.panel.chat`

Precondition: `workbench.panel.chat.view.copilot.active`

Default Keybinding:

- Windows: `Ctrl+Alt+I`
- Linux: `Ctrl+Alt+I`
- macOS: `Ctrl+Cmd+I`

---

### Show Extensions

ID: `workbench.view.extensions`

Precondition: `viewContainer.workbench.view.extensions.enabled`

Default Keybinding:

- Windows: `Ctrl+Shift+X`
- Linux: `Ctrl+Shift+X`
- macOS: `Shift+Cmd+X`

---

### Show Test Explorer

ID: `workbench.view.testing.open`

Precondition: `workbench.view.testing.active`

---

### Show Test Coverage

ID: `workbench.view.testCoverage.open`

Precondition: `workbench.view.testCoverage.active`

---

### Show Testing

ID: `workbench.view.extension.test`

Precondition: `viewContainer.workbench.view.extension.test.enabled`

---

### Show Outline

ID: `outline.open`

Precondition: `outline.active`

---

### Show Timeline

ID: `timeline.open`

Precondition: `timeline.active`

---

### Show Explorer

ID: `workbench.view.explorer`

Precondition: `viewContainer.workbench.view.explorer.enabled`

Default Keybinding:

- Windows: `Ctrl+Shift+E`
- Linux: `Ctrl+Shift+E`
- macOS: `Shift+Cmd+E`

---

### Show Search

ID: `workbench.view.search`

Precondition: `workbench.view.search.active`

Default Keybinding:

- Windows: `Ctrl+Shift+F`
- Linux: `Ctrl+Shift+F`
- macOS: `Shift+Cmd+F`

When: `neverMatch =~ /doesNotMatch/`

---

### Show Repositories

ID: `workbench.scm.repositories.open`

Precondition: `workbench.scm.repositories.active`

---

### Show Changes

ID: `workbench.view.scm`

Precondition: `workbench.scm.active`

Default Keybinding:

- Windows: `Ctrl+Shift+G`
- Linux: `Ctrl+Shift+G`
- macOS: `Ctrl+Shift+G`

---

### Show Graph

ID: `workbench.scm.history.open`

Precondition: `workbench.scm.history.active`

---

### Show Run

ID: `workbench.debug.welcome.open`

Precondition: `workbench.debug.welcome.active`

---

### Show Variables

ID: `workbench.debug.variablesView.open`

Precondition: `workbench.debug.variablesView.active`

---

### Show Watch

ID: `workbench.debug.watchExpressionsView.open`

Precondition: `workbench.debug.watchExpressionsView.active`

---

### Show Call Stack

ID: `workbench.debug.callStackView.open`

Precondition: `workbench.debug.callStackView.active`

---

### Show Loaded Scripts

ID: `workbench.debug.loadedScriptsView.open`

Precondition: `workbench.debug.loadedScriptsView.active`

---

### Show Breakpoints

ID: `workbench.debug.breakPointsView.open`

Precondition: `workbench.debug.breakPointsView.active`

---

### Show Run and Debug

ID: `workbench.view.debug`

Precondition: `viewContainer.workbench.view.debug.enabled`

Default Keybinding:

- Windows: `Ctrl+Shift+D`
- Linux: `Ctrl+Shift+D`
- macOS: `Shift+Cmd+D`

---

### Show Remote Explorer

ID: `workbench.view.remote`

Precondition: `viewContainer.workbench.view.remote.enabled`

---

### Toggle Test Results

ID: `workbench.panel.testResults.view.open`

Precondition: `workbench.panel.testResults.view.active`

---

### Toggle Refactor Preview

ID: `refactorPreview.open`

Precondition: `refactorPreview.active`

---

### Toggle Refactor Preview

ID: `refactorPreview`

Precondition: `viewContainer.refactorPreview.enabled`

---

### Toggle Debug Console

ID: `workbench.debug.action.toggleRepl`

Precondition: `workbench.panel.repl.view.active`

Default Keybinding:

- Windows: `Ctrl+Shift+Y`
- Linux: `Ctrl+Shift+Y`
- macOS: `Shift+Cmd+Y`

---

### Toggle Problems

ID: `workbench.actions.view.problems`

Precondition: `workbench.panel.markers.view.active`

Default Keybinding:

- Windows: `Ctrl+Shift+M`
- Linux: `Ctrl+Shift+M`
- macOS: `Shift+Cmd+M`

---

### Toggle Output

ID: `workbench.action.output.toggleOutput`

Precondition: `workbench.panel.output.active`

Default Keybinding:

- Windows: `Ctrl+Shift+U`
- Linux: `Ctrl+K Ctrl+H`
- macOS: `Shift+Cmd+U`

---

### Toggle Terminal

ID: `workbench.action.terminal.toggleTerminal`

Precondition: `terminal.active`

Default Keybinding:

- Windows: `Ctrl+``
- Linux: `Ctrl+``
- macOS: `Ctrl+``

---

### Focus Title Bar

ID: `workbench.action.focusTitleBar`

Precondition: `titleBarVisible`

---

### Show Open Editors

ID: `workbench.explorer.openEditorsView.open`

Precondition: `workbench.explorer.openEditorsView.active`

---

### Show No Folder Opened

ID: `workbench.explorer.emptyView.open`

Precondition: `workbench.explorer.emptyView.active`

---

### Show References

ID: `workbench.view.extension.references-view`

Precondition: `viewContainer.workbench.view.extension.references-view.enabled`

---

### Show Event Listener Breakpoints

ID: `jsBrowserBreakpoints.open`

Precondition: `jsBrowserBreakpoints.active`

---

### Show Excluded Callers

ID: `jsExcludedCallers.open`

Precondition: `jsExcludedCallers.active`

---

### Show Network

ID: `jsDebugNetworkTree.open`

Precondition: `jsDebugNetworkTree.active`

---

### Show NPM Scripts

ID: `npm.open`

Precondition: `npm.active`

---

### Show Reference Search Results

ID: `references-view.tree.open`

Precondition: `references-view.tree.active`

---

### Show Installed

ID: `workbench.views.extensions.installed.open`

Precondition: `workbench.views.extensions.installed.active`

---

### Show Popular

ID: `workbench.views.extensions.popular.open`

Precondition: `workbench.views.extensions.popular.active`

---

### Show Recommended

ID: `extensions.recommendedList.open`

Precondition: `extensions.recommendedList.active`

---

### Show Enabled

ID: `workbench.views.extensions.enabled.open`

Precondition: `workbench.views.extensions.enabled.active`

---

### Show Disabled

ID: `workbench.views.extensions.disabled.open`

Precondition: `workbench.views.extensions.disabled.active`

---

### Show Marketplace

ID: `workbench.views.extensions.marketplace.open`

Precondition: `workbench.views.extensions.marketplace.active`

---

### Show Installed

ID: `workbench.views.extensions.searchInstalled.open`

Precondition: `workbench.views.extensions.searchInstalled.active`

---

### Show Recently Updated

ID: `workbench.views.extensions.searchRecentlyUpdated.open`

Precondition: `workbench.views.extensions.searchRecentlyUpdated.active`

---

### Show Enabled

ID: `workbench.views.extensions.searchEnabled.open`

Precondition: `workbench.views.extensions.searchEnabled.active`

---

### Show Disabled

ID: `workbench.views.extensions.searchDisabled.open`

Precondition: `workbench.views.extensions.searchDisabled.active`

---

### Show Available Updates

ID: `workbench.views.extensions.searchOutdated.open`

Precondition: `workbench.views.extensions.searchOutdated.active`

---

### Show Builtin

ID: `workbench.views.extensions.searchBuiltin.open`

Precondition: `workbench.views.extensions.searchBuiltin.active`

---

### Show Workspace Unsupported

ID: `workbench.views.extensions.searchWorkspaceUnsupported.open`

Precondition: `workbench.views.extensions.searchWorkspaceUnsupported.active`

---

### Show Workspace Recommendations

ID: `workbench.views.extensions.workspaceRecommendations.open`

Precondition: `workbench.views.extensions.workspaceRecommendations.active`

---

### Show Other Recommendations

ID: `workbench.views.extensions.otherRecommendations.open`

Precondition: `workbench.views.extensions.otherRecommendations.active`

---

### Show Features

ID: `workbench.views.extensions.builtinFeatureExtensions.open`

Precondition: `workbench.views.extensions.builtinFeatureExtensions.active`

---

### Show Themes

ID: `workbench.views.extensions.builtinThemeExtensions.open`

Precondition: `workbench.views.extensions.builtinThemeExtensions.active`

---

### Show Programming Languages

ID: `workbench.views.extensions.builtinProgrammingLanguageExtensions.open`

Precondition: `workbench.views.extensions.builtinProgrammingLanguageExtensions.active`

---

### Show Disabled in Restricted Mode

ID: `workbench.views.extensions.untrustedUnsupportedExtensions.open`

Precondition: `workbench.views.extensions.untrustedUnsupportedExtensions.active`

---

### Show Limited in Restricted Mode

ID: `workbench.views.extensions.untrustedPartiallySupportedExtensions.open`

Precondition: `workbench.views.extensions.untrustedPartiallySupportedExtensions.active`

---

### Show Disabled in Virtual Workspaces

ID: `workbench.views.extensions.virtualUnsupportedExtensions.open`

Precondition: `workbench.views.extensions.virtualUnsupportedExtensions.active`

---

### Show Limited in Virtual Workspaces

ID: `workbench.views.extensions.virtualPartiallySupportedExtensions.open`

Precondition: `workbench.views.extensions.virtualPartiallySupportedExtensions.active`

---

### Show Deprecated

ID: `workbench.views.extensions.deprecatedExtensions.open`

Precondition: `workbench.views.extensions.deprecatedExtensions.active`

---

### Show Marketplace

ID: `workbench.views.extensions.marketplaceAccess.open`

Precondition: `workbench.views.extensions.marketplaceAccess.active`

---

### Show MCP Servers - Installed

ID: `workbench.views.mcp.installed.open`

Precondition: `workbench.views.mcp.installed.active`

---

### Show MCP Servers

ID: `workbench.views.mcp.default.marketplace.open`

Precondition: `workbench.views.mcp.default.marketplace.active`

---

### Show MCP Servers

ID: `workbench.views.mcp.marketplace.open`

Precondition: `workbench.views.mcp.marketplace.active`

---

### Show MCP Servers

ID: `workbench.views.mcp.default.welcomeView.open`

Precondition: `workbench.views.mcp.default.welcomeView.active`

---

### Show MCP Servers

ID: `workbench.views.mcp.welcomeView.open`

Precondition: `workbench.views.mcp.welcomeView.active`

---

### Clear Output

ID: `workbench.output.action.clearOutput`

---

### Toggle Ports

ID: `~remote.forwardedPortsContainer`

Precondition: `viewContainer.~remote.forwardedPortsContainer.enabled`

---

### Toggle Ports

ID: `~remote.forwardedPorts.open`

Precondition: `~remote.forwardedPorts.active`

---

### Toggle Locked Scrolling Across Editors

ID: `workbench.action.toggleLockedScrolling`

---

### Hold Locked Scrolling Across Editors

ID: `workbench.action.holdLockedScrolling`

## Voice

### Start Dictation in Editor

ID: `workbench.action.editorDictation.start`

Precondition: `hasSpeechProvider && !editorReadonly && !speechToTextInProgress`

Default Keybinding:

- Windows: `Ctrl+Alt+V`
- Linux: `Ctrl+Alt+V`
- macOS: `Alt+Cmd+V`

---

### Stop Dictation in Editor

ID: `workbench.action.editorDictation.stop`

Precondition: `editorDictation.inProgress`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

## Welcome

### Go Back

ID: `welcome.goBack`

Precondition: `activeEditor == 'gettingStartedPage'`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `inWelcome`

---

### Mark Step Complete

ID: `welcome.markStepComplete`

---

### Mark Step Incomplete

ID: `welcome.markStepIncomplete`

---

### Open Walkthrough...

ID: `welcome.showAllWalkthroughs`

## Workspaces

### Add Folder to Workspace...

ID: `workbench.action.addRootFolder`

Precondition: `enterMultiRootWorkspaceSupport || workbenchState == 'workspace'`

---

### Remove Folder from Workspace...

ID: `workbench.action.removeRootFolder`

Precondition: `enterMultiRootWorkspaceSupport && workspaceFolderCount != '0' || workbenchState == 'workspace' && workspaceFolderCount != '0'`

---

### Open Workspace Configuration File

ID: `workbench.action.openWorkspaceConfigFile`

Precondition: `workbenchState == 'workspace'`

---

### Close Workspace

ID: `workbench.action.closeFolder`

Precondition: `emptyWorkspaceSupport && workbenchState != 'empty'`

Default Keybinding:

- Windows: `Ctrl+K F`
- Linux: `Ctrl+K F`
- macOS: `Cmd+K F`

---

### Save Workspace As...

ID: `workbench.action.saveWorkspaceAs`

Precondition: `enterMultiRootWorkspaceSupport`

---

### Duplicate As Workspace in New Window

ID: `workbench.action.duplicateWorkspaceInNewWindow`

Precondition: `enterMultiRootWorkspaceSupport`

---

### Configure Workspace Trust Settings

ID: `workbench.trust.configure`

Precondition: `config.security.workspace.trust.enabled && isWorkspaceTrustEnabled`

---

### Manage Workspace Trust

ID: `workbench.trust.manage`

Precondition: `config.security.workspace.trust.enabled && isWorkspaceTrustEnabled`

## Uncategorized

### Toggle Collapse Unchanged Regions

ID: `diffEditor.toggleCollapseUnchangedRegions`

Precondition: `isInDiffEditor`

---

### Toggle Show Moved Code Blocks

ID: `diffEditor.toggleShowMovedCodeBlocks`

Precondition: `isInDiffEditor`

---

### Toggle Use Inline View When Space Is Limited

ID: `diffEditor.toggleUseInlineViewWhenSpaceIsLimited`

Precondition: `isInDiffEditor`

---

### Hide action widget

ID: `hideCodeActionWidget`

Precondition: `codeActionMenuVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

Secondary Keybinding:

- Windows: `Shift+Escape`
- Linux: `Shift+Escape`
- macOS: `Shift+Escape`

---

### Select previous action

ID: `selectPrevCodeAction`

Precondition: `codeActionMenuVisible`

Default Keybinding:

- Windows: `UpArrow`
- Linux: `UpArrow`
- macOS: `UpArrow`

Secondary Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow, Ctrl+P`

---

### Select next action

ID: `selectNextCodeAction`

Precondition: `codeActionMenuVisible`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

Secondary Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow, Ctrl+N`

---

### Accept selected action

ID: `acceptSelectedCodeAction`

Precondition: `codeActionMenuVisible`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

Secondary Keybinding:

- Windows: `Ctrl+.`
- Linux: `Ctrl+.`
- macOS: `Cmd+.`

---

### Preview selected action

ID: `previewSelectedCodeAction`

Precondition: `codeActionMenuVisible`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

---

### Go to Definition

ID: `editor.action.revealDefinition`

Precondition: `editorHasDefinitionProvider`

Default Keybinding:

- Windows: `F12`
- Linux: `F12`
- macOS: `F12`

When: `editorTextFocus`

---

### Open Definition to the Side

ID: `editor.action.revealDefinitionAside`

Precondition: `editorHasDefinitionProvider && !isInEmbeddedEditor`

Default Keybinding:

- Windows: `Ctrl+K F12`
- Linux: `Ctrl+K F12`
- macOS: `Cmd+K F12`

When: `editorTextFocus`

---

### Peek Definition

ID: `editor.action.peekDefinition`

Precondition: `editorHasDefinitionProvider && !inReferenceSearchEditor && !isInEmbeddedEditor`

Default Keybinding:

- Windows: `Alt+F12`
- Linux: `Ctrl+Shift+F10`
- macOS: `Alt+F12`

When: `editorTextFocus`

---

### Go to Declaration

ID: `editor.action.revealDeclaration`

Precondition: `editorHasDeclarationProvider && !isInEmbeddedEditor`

---

### Peek Declaration

ID: `editor.action.peekDeclaration`

Precondition: `editorHasDeclarationProvider && !inReferenceSearchEditor && !isInEmbeddedEditor`

---

### Go to Type Definition

ID: `editor.action.goToTypeDefinition`

Precondition: `editorHasTypeDefinitionProvider`

When: `editorTextFocus`

---

### Peek Type Definition

ID: `editor.action.peekTypeDefinition`

Precondition: `editorHasTypeDefinitionProvider && !inReferenceSearchEditor && !isInEmbeddedEditor`

---

### Go to Implementations

ID: `editor.action.goToImplementation`

Precondition: `editorHasImplementationProvider`

Default Keybinding:

- Windows: `Ctrl+F12`
- Linux: `Ctrl+F12`
- macOS: `Cmd+F12`

When: `editorTextFocus`

---

### Peek Implementations

ID: `editor.action.peekImplementation`

Precondition: `editorHasImplementationProvider && !inReferenceSearchEditor && !isInEmbeddedEditor`

Default Keybinding:

- Windows: `Ctrl+Shift+F12`
- Linux: `Ctrl+Shift+F12`
- macOS: `Shift+Cmd+F12`

When: `editorTextFocus`

---

### Go to References

ID: `editor.action.goToReferences`

Precondition: `editorHasReferenceProvider && !inReferenceSearchEditor && !isInEmbeddedEditor`

Default Keybinding:

- Windows: `Shift+F12`
- Linux: `Shift+F12`
- macOS: `Shift+F12`

When: `editorTextFocus`

---

### Peek References

ID: `editor.action.referenceSearch.trigger`

Precondition: `editorHasReferenceProvider && !inReferenceSearchEditor && !isInEmbeddedEditor`

---

### Show or Focus Standalone Color Picker

ID: `editor.action.showOrFocusStandaloneColorPicker`

---

### Always Show Toolbar

ID: `editor.action.inlineSuggest.toggleAlwaysShowToolbar`

---

### Snooze Inline Suggestions

ID: `editor.action.inlineSuggest.snooze`

Precondition: `true`

---

### Cancel Snooze Inline Suggestions

ID: `editor.action.inlineSuggest.cancelSnooze`

Precondition: `inlineCompletions.snoozed`

---

### Focus Next Rename Suggestion

ID: `focusNextRenameSuggestion`

Precondition: `renameInputVisible`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

---

### Focus Previous Rename Suggestion

ID: `focusPreviousRenameSuggestion`

Precondition: `renameInputVisible`

Default Keybinding:

- Windows: `UpArrow`
- Linux: `UpArrow`
- macOS: `UpArrow`

---

### Focus Editor Sticky Scroll

ID: `editor.action.focusStickyScroll`

Precondition: `config.editor.stickyScroll.enabled && stickyScrollVisible`

---

### Select the previous sticky scroll line

ID: `editor.action.selectPreviousStickyScrollLine`

Precondition: `stickyScrollFocused`

Default Keybinding:

- Windows: `UpArrow`
- Linux: `UpArrow`
- macOS: `UpArrow`

---

### Select the next editor sticky scroll line

ID: `editor.action.selectNextStickyScrollLine`

Precondition: `stickyScrollFocused`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

---

### Go to the focused sticky scroll line

ID: `editor.action.goToFocusedStickyScrollLine`

Precondition: `stickyScrollFocused`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

---

### Select Editor

ID: `editor.action.selectEditor`

Precondition: `stickyScrollFocused`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Toggle Tab Key Moves Focus

ID: `editor.action.toggleTabFocusMode`

Default Keybinding:

- Windows: `Ctrl+M`
- Linux: `Ctrl+M`
- macOS: `Ctrl+Shift+M`

---

### Disable highlighting of ambiguous characters

ID: `editor.action.unicodeHighlight.disableHighlightingOfAmbiguousCharacters`

---

### Disable highlighting of invisible characters

ID: `editor.action.unicodeHighlight.disableHighlightingOfInvisibleCharacters`

---

### Disable highlighting of non basic ASCII characters

ID: `editor.action.unicodeHighlight.disableHighlightingOfNonBasicAsciiCharacters`

---

### Show Exclude Options

ID: `editor.action.unicodeHighlight.showExcludeOptions`

---

###

ID: `workbench.action.chat.addDynamicVariable`

---

### Reset choice for 'File operation needs preview'

ID: `files.participants.resetChoice`

---

### Focus Comments view

ID: `commentsFocusViewFromFilter`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `commentsFilterFocus`

---

### Clear filter text

ID: `commentsClearFilterText`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `commentsFilterFocus`

---

### Focus comments filter

ID: `commentsFocusFilter`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

When: `focusedView == 'workbench.panel.comments'`

---

### Show Next in Accessible View

ID: `editor.action.accessibleViewNext`

Precondition: `accessibleViewIsShown && accessibleViewSupportsNavigation`

Default Keybinding:

- Windows: `Alt+]`
- Linux: `Alt+]`
- macOS: `Alt+]`

---

### Accessible View: Next Code Block

ID: `editor.action.accessibleViewNextCodeBlock`

Precondition: `accessibleViewContainsCodeBlocks && accessibleViewCurrentProviderId == 'inlineChat' || accessibleViewContainsCodeBlocks && accessibleViewCurrentProviderId == 'panelChat' || accessibleViewContainsCodeBlocks && accessibleViewCurrentProviderId == 'quickChat'`

Default Keybinding:

- Windows: `Ctrl+Alt+PageDown`
- Linux: `Ctrl+Alt+PageDown`
- macOS: `Alt+Cmd+PageDown`

---

### Accessible View: Previous Code Block

ID: `editor.action.accessibleViewPreviousCodeBlock`

Precondition: `accessibleViewContainsCodeBlocks && accessibleViewCurrentProviderId == 'inlineChat' || accessibleViewContainsCodeBlocks && accessibleViewCurrentProviderId == 'panelChat' || accessibleViewContainsCodeBlocks && accessibleViewCurrentProviderId == 'quickChat'`

Default Keybinding:

- Windows: `Ctrl+Alt+PageUp`
- Linux: `Ctrl+Alt+PageUp`
- macOS: `Alt+Cmd+PageUp`

---

### Show Previous in Accessible View

ID: `editor.action.accessibleViewPrevious`

Precondition: `accessibleViewIsShown && accessibleViewSupportsNavigation`

Default Keybinding:

- Windows: `Alt+[`
- Linux: `Alt+[`
- macOS: `Alt+[`

---

### Go To Symbol in Accessible View

ID: `editor.action.accessibleViewGoToSymbol`

Precondition: `accessibilityHelpIsShown && accessibleViewGoToSymbolSupported || accessibleViewGoToSymbolSupported && accessibleViewIsShown`

Default Keybinding:

- Windows: `Ctrl+Shift+O`
- Linux: `Ctrl+Shift+O`
- macOS: `Shift+Cmd+O`

Secondary Keybinding:

- Windows: `Ctrl+Shift+.`
- Linux: `Ctrl+Shift+.`
- macOS: `Shift+Cmd+.`

---

### Disable Accessible View Hint

ID: `editor.action.accessibleViewDisableHint`

Precondition: `accessibilityHelpIsShown && accessibleViewVerbosityEnabled || accessibleViewIsShown && accessibleViewVerbosityEnabled`

Default Keybinding:

- Windows: `Alt+F6`
- Linux: `Alt+F6`
- macOS: `Alt+F6`

---

### Accessibility Help Configure Unassigned Keybindings

ID: `editor.action.accessibilityHelpConfigureKeybindings`

Precondition: `accessibilityHelpIsShown && accessibleViewHasUnassignedKeybindings`

Default Keybinding:

- Windows: `Alt+K`
- Linux: `Alt+K`
- macOS: `Alt+K`

---

### Accessibility Help Configure Assigned Keybindings

ID: `editor.action.accessibilityHelpConfigureAssignedKeybindings`

Precondition: `accessibilityHelpIsShown && accessibleViewHasAssignedKeybindings`

Default Keybinding:

- Windows: `Alt+A`
- Linux: `Alt+A`
- macOS: `Alt+A`

---

### Accessibility Help Open Help Link

ID: `editor.action.accessibilityHelpOpenHelpLink`

Precondition: `accessibilityHelpIsShown`

Default Keybinding:

- Windows: `Alt+H`
- Linux: `Alt+H`
- macOS: `Alt+H`

---

### Accept Inline Completion

ID: `editor.action.accessibleViewAcceptInlineCompletion`

Precondition: `accessibleViewIsShown && accessibleViewCurrentProviderId == 'inlineCompletions'`

Default Keybinding:

- Windows: `Ctrl+/`
- Linux: `Ctrl+/`
- macOS: `Ctrl+/`

---

### Move View Up

ID: `views.moveViewUp`

Default Keybinding:

- Windows: `Ctrl+K UpArrow`
- Linux: `Ctrl+K UpArrow`
- macOS: `Cmd+K UpArrow`

When: `focusedView != ''`

---

### Move View Left

ID: `views.moveViewLeft`

Default Keybinding:

- Windows: `Ctrl+K LeftArrow`
- Linux: `Ctrl+K LeftArrow`
- macOS: `Cmd+K LeftArrow`

When: `focusedView != ''`

---

### Move View Down

ID: `views.moveViewDown`

Default Keybinding:

- Windows: `Ctrl+K DownArrow`
- Linux: `Ctrl+K DownArrow`
- macOS: `Cmd+K DownArrow`

When: `focusedView != ''`

---

### Move View Right

ID: `views.moveViewRight`

Default Keybinding:

- Windows: `Ctrl+K RightArrow`
- Linux: `Ctrl+K RightArrow`
- macOS: `Cmd+K RightArrow`

When: `focusedView != ''`

---

### Move Views

ID: `vscode.moveViews`

---

### Move Primary Side Bar Right

ID: `workbench.action.moveSideBarRight`

---

### Move Primary Side Bar Left

ID: `workbench.action.moveSideBarLeft`

---

### Increase Current View Size

ID: `workbench.action.increaseViewSize`

Precondition: `!isAuxiliaryWindowFocusedContext`

---

### Increase Editor Width

ID: `workbench.action.increaseViewWidth`

Precondition: `!isAuxiliaryWindowFocusedContext`

---

### Increase Editor Height

ID: `workbench.action.increaseViewHeight`

Precondition: `!isAuxiliaryWindowFocusedContext`

---

### Decrease Current View Size

ID: `workbench.action.decreaseViewSize`

Precondition: `!isAuxiliaryWindowFocusedContext`

---

### Decrease Editor Width

ID: `workbench.action.decreaseViewWidth`

Precondition: `!isAuxiliaryWindowFocusedContext`

---

### Decrease Editor Height

ID: `workbench.action.decreaseViewHeight`

Precondition: `!isAuxiliaryWindowFocusedContext`

---

### Align Quick Input Top

ID: `workbench.action.alignQuickInputTop`

---

### Align Quick Input Center

ID: `workbench.action.alignQuickInputCenter`

---

### Customize Layout...

ID: `workbench.action.customizeLayout`

---

### New Window

ID: `workbench.action.newWindow`

Default Keybinding:

- Windows: `Ctrl+Shift+N`
- Linux: `Ctrl+Shift+N`
- macOS: `Shift+Cmd+N`

---

### Remove keyboard focus from focused element

ID: `workbench.action.blur`

---

### Go to File...

ID: `workbench.action.quickOpen`

Default Keybinding:

- Windows: `Ctrl+P`
- Linux: `Ctrl+P`
- macOS: `Cmd+P`

Secondary Keybinding:

- Windows: `Ctrl+E`
- Linux: `Ctrl+E`
- macOS: `Cmd+E`

---

### Quick Open

ID: `workbench.action.quickOpenWithModes`

---

### Select Next in Quick Open

ID: `workbench.action.quickOpenSelectNext`

When: `inQuickOpen`

---

### Select Previous in Quick Open

ID: `workbench.action.quickOpenSelectPrevious`

When: `inQuickOpen`

---

### Navigate Next in Quick Open

ID: `workbench.action.quickOpenNavigateNext`

---

### Navigate Previous in Quick Open

ID: `workbench.action.quickOpenNavigatePrevious`

---

### Change Language Mode

ID: `workbench.action.editor.changeLanguageMode`

Precondition: `!notebookEditorFocused`

Default Keybinding:

- Windows: `Ctrl+K M`
- Linux: `Ctrl+K M`
- macOS: `Cmd+K M`

---

### Change End of Line Sequence

ID: `workbench.action.editor.changeEOL`

---

### Change File Encoding

ID: `workbench.action.editor.changeEncoding`

---

### Go Forward

ID: `workbench.action.navigateForward`

Precondition: `canNavigateForward`

Default Keybinding:

- Windows: `Alt+RightArrow`
- Linux: `Ctrl+Shift+-`
- macOS: `Ctrl+Shift+-`

Secondary Keybinding:

- Windows: `BrowserForward`
- Linux: `BrowserForward`
- macOS: `BrowserForward`

---

### Go Back

ID: `workbench.action.navigateBack`

Precondition: `canNavigateBack`

Default Keybinding:

- Windows: `Alt+LeftArrow`
- Linux: `Ctrl+Alt+-`
- macOS: `Ctrl+-`

Secondary Keybinding:

- Windows: `BrowserBack`
- Linux: `BrowserBack`
- macOS: `BrowserBack`

---

### Go Previous

ID: `workbench.action.navigateLast`

---

### Go Forward in Edit Locations

ID: `workbench.action.navigateForwardInEditLocations`

---

### Go Back in Edit Locations

ID: `workbench.action.navigateBackInEditLocations`

---

### Go Previous in Edit Locations

ID: `workbench.action.navigatePreviousInEditLocations`

---

### Go to Last Edit Location

ID: `workbench.action.navigateToLastEditLocation`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Q`
- Linux: `Ctrl+K Ctrl+Q`
- macOS: `Cmd+K Cmd+Q`

---

### Go Forward in Navigation Locations

ID: `workbench.action.navigateForwardInNavigationLocations`

---

### Go Back in Navigation Locations

ID: `workbench.action.navigateBackInNavigationLocations`

---

### Go Previous in Navigation Locations

ID: `workbench.action.navigatePreviousInNavigationLocations`

---

### Go to Last Navigation Location

ID: `workbench.action.navigateToLastNavigationLocation`

---

### Clear Editor History

ID: `workbench.action.clearEditorHistory`

---

### Clear Editor History without Confirmation

ID: `workbench.action.clearEditorHistoryWithoutConfirm`

Precondition: `inAutomation`

---

### Quick Open Previous Editor from History

ID: `workbench.action.openPreviousEditorFromHistory`

---

### Focus and Select Breadcrumbs

ID: `breadcrumbs.focusAndSelect`

Precondition: `breadcrumbsVisible`

Default Keybinding:

- Windows: `Ctrl+Shift+.`
- Linux: `Ctrl+Shift+.`
- macOS: `Shift+Cmd+.`

When: `breadcrumbsPossible`

---

### Focus Breadcrumbs

ID: `breadcrumbs.focus`

Precondition: `breadcrumbsVisible`

Default Keybinding:

- Windows: `Ctrl+Shift+;`
- Linux: `Ctrl+Shift+;`
- macOS: `Shift+Cmd+;`

When: `breadcrumbsPossible`

---

### Turn On Compact Mode

ID: `workbench.action.enableCompactAuxiliaryWindow`

---

### Turn Off Compact Mode

ID: `workbench.action.disableCompactAuxiliaryWindow`

---

### Markdown Headers Only

ID: `notebook.outline.toggleShowMarkdownHeadersOnly`

---

### Code Cells

ID: `notebook.outline.toggleCodeCells`

---

### Code Cell Symbols

ID: `notebook.outline.toggleCodeCellSymbols`

---

### Run Cell

ID: `notebook.section.runSingleCell`

---

### Run Cells In Section

ID: `notebook.section.runCells`

---

### Fold Section

ID: `notebook.section.foldSection`

---

### Expand Section

ID: `notebook.section.expandSection`

---

### Toggle Breadcrumbs

ID: `breadcrumbs.toggleFromEditorTitle`

---

### Command Center

ID: `toggle.window.commandCenter`

---

### Navigation Controls

ID: `toggle.workbench.navigationControl.enabled`

---

### Layout Controls

ID: `toggle.workbench.layoutControl.enabled`

---

### Hide Custom Title Bar

ID: `toggle.window.customTitleBarVisibility`

---

### Hide Custom Title Bar In Full Screen

ID: `toggle.window.customTitleBarVisibility.windowed`

---

### Custom Title Bar

ID: `toggle.toggleCustomTitleBar`

---

### Show Custom Title Bar

ID: `showCustomTitleBar`

Precondition: `!titleBarVisible`

---

### Hide Custom Title Bar

ID: `hideCustomTitleBar`

Precondition: `titleBarVisible`

---

### Hide Custom Title Bar In Full Screen

ID: `hideCustomTitleBarInFullScreen`

Precondition: `isFullscreen && titleBarVisible`

---

### Editor Actions

ID: `toggle.workbench.editor.editorActionsLocation`

---

### Add to Chat

ID: `workbench.scm.action.graph.addHistoryItemToChat`

---

### Explain Changes

ID: `workbench.scm.action.graph.summarizeHistoryItem`

---

### Add to Chat

ID: `workbench.scm.action.graph.addHistoryItemChangeToChat`

---

### Chat Controls

ID: `toggle.chat.commandCenter.enabled`

---

### Show View by Default

ID: `workbench.action.chat.toggleDefaultVisibility`

---

### Edit Tool Approval

ID: `workbench.action.chat.editToolApproval`

---

### Toggle Vertical/Horizontal Editor Layout

ID: `workbench.action.toggleEditorGroupLayout`

Default Keybinding:

- Windows: `Shift+Alt+0`
- Linux: `Shift+Alt+0`
- macOS: `Alt+Cmd+0`

---

### Save All

ID: `workbench.action.files.saveAll`

---

### Close All Editors

ID: `openEditors.closeAll`

---

### New Untitled Text File

ID: `openEditors.newUntitledFile`

---

### New File...

ID: `workbench.files.action.createFileFromExplorer`

Precondition: `explorerResourceIsFolder && !explorerResourceReadonly || !explorerResourceIsFolder && !explorerResourceParentReadonly`

---

### New Folder...

ID: `workbench.files.action.createFolderFromExplorer`

Precondition: `explorerResourceIsFolder && !explorerResourceReadonly || !explorerResourceIsFolder && !explorerResourceParentReadonly`

---

### Refresh Explorer

ID: `workbench.files.action.refreshFilesExplorer`

Precondition: `!explorerFindProviderActive`

---

### Collapse Folders in Explorer

ID: `workbench.files.action.collapseExplorerFolders`

---

### Add File to Chat

ID: `chat.inlineResourceAnchor.addFileToChat`

---

### Copy

ID: `chat.inlineResourceAnchor.copyResource`

Precondition: `chatAttachmentResource`

Default Keybinding:

- Windows: `Ctrl+C`
- Linux: `Ctrl+C`
- macOS: `Cmd+C`

---

### Open to the Side

ID: `chat.inlineResourceAnchor.openToSide`

Precondition: `chatAttachmentResource`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Ctrl+Enter`

---

### Go to Definition

ID: `chat.inlineSymbolAnchor.goToDefinition`

---

### Go to Type Definitions

ID: `chat.inlineSymbolAnchor.goToTypeDefinitions`

---

### Go to Implementations

ID: `chat.inlineSymbolAnchor.goToImplementations`

---

### Go to References

ID: `chat.inlineSymbolAnchor.goToReferences`

---

### Add File to Chat

ID: `workbench.action.chat.addToChatAction`

---

### Copy Link

ID: `workbench.action.chat.copyLink`

---

### Open File

ID: `chat.openFileUpdatedBySnapshot`

---

### Open File Snapshot

ID: `chat.openFileSnapshot`

---

### Save As...

ID: `chat.toolOutput.save`

---

### Indent Using Spaces

ID: `notebook.action.indentUsingSpaces`

---

### Indent Using Tabs

ID: `notebook.action.indentUsingTabs`

---

### Change Tab Display Size

ID: `notebook.action.changeTabDisplaySize`

---

### Convert Indentation to Spaces

ID: `notebook.action.convertIndentationToSpaces`

---

### Convert Indentation to Tabs

ID: `notebook.action.convertIndentationToTabs`

---

### Add Function Breakpoint

ID: `workbench.debug.viewlet.action.addFunctionBreakpointAction`

---

### Add Data Breakpoint at Address

ID: `workbench.debug.viewlet.action.addDataBreakpointOnAddress`

---

### Edit Address...

ID: `workbench.debug.viewlet.action.editDataBreakpointOnAddress`

---

### Toggle Activate Breakpoints

ID: `workbench.debug.viewlet.action.toggleBreakpointsActivatedAction`

---

### Remove Breakpoint

ID: `workbench.debug.viewlet.action.removeBreakpoint`

---

### Remove All Breakpoints

ID: `workbench.debug.viewlet.action.removeAllBreakpoints`

---

### Enable All Breakpoints

ID: `workbench.debug.viewlet.action.enableAllBreakpoints`

Precondition: `debuggersAvailable`

---

### Disable All Breakpoints

ID: `workbench.debug.viewlet.action.disableAllBreakpoints`

Precondition: `debuggersAvailable`

---

### Reapply All Breakpoints

ID: `workbench.debug.viewlet.action.reapplyBreakpointsAction`

Precondition: `inDebugMode`

---

### Edit Condition...

ID: `debug.editBreakpoint`

Precondition: `breakpointSupportsCondition`

---

### Edit Function Condition...

ID: `debug.editFunctionBreakpoint`

---

### Edit Hit Count...

ID: `debug.editFunctionBreakpointHitCount`

Precondition: `breakpointSupportsCondition`

---

### Edit Mode...

ID: `debug.editBreakpointMode`

---

### Attach to Current Code Renderer

ID: `debug.attachToCurrentCodeRenderer`

---

### Collapse All

ID: `variables.collapse`

---

###

ID: `workbench.action.chat.assignSelectedAgent`

---

###

ID: `workbench.action.chat.startParameterizedPrompt`

---

### Accept and Run

ID: `notebook.inlineChat.acceptChangesAndRun`

Precondition: `inlineChatVisible && notebookEditable`

---

###

ID: `notebook.chat.selectAndInsertKernelVariable`

---

### Hide Find in Notebook

ID: `notebook.hideFind`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `notebookEditorFocused && notebookFindWidgetFocused`

---

### Find Next

ID: `notebook.findNext.fromWidget`

Default Keybinding:

- Windows: `F3`
- Linux: `F3`
- macOS: `Cmd+G`

When: `notebookEditorFocused && notebookFindWidgetFocused`

---

### Find Previous

ID: `notebook.findPrevious.fromWidget`

Default Keybinding:

- Windows: `Shift+F3`
- Linux: `Shift+F3`
- macOS: `Shift+Cmd+G`

When: `notebookEditorFocused && notebookFindWidgetFocused`

---

### Find Next

ID: `notebook.findNext.enter`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `notebookEditorFocused && notebookFindWidgetFocused`

---

### Keypresses that should be handled by the focused element in the cell output.

ID: `notebook.cell.nullAction`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

When: `notebookOutputInputFocused`

---

### Set Profile

ID: `notebook.setProfile`

---

### Open File

ID: `notebook.diff.openFile`

Precondition: `activeEditor == 'workbench.editor.notebookMultiTextDiffEditor' || activeEditor == 'workbench.editor.notebookTextDiffEditor'`

---

### Toggle Collapse Unchanged Regions

ID: `notebook.diff.cell.toggleCollapseUnchangedRegions`

Precondition: `activeEditor == 'workbench.editor.notebookTextDiffEditor'`

---

### Open Text Diff Editor

ID: `notebook.diff.switchToText`

Precondition: `activeEditor == 'workbench.editor.notebookMultiTextDiffEditor' || activeEditor == 'workbench.editor.notebookTextDiffEditor'`

---

### Show Unchanged Cells

ID: `notebook.diffEditor.showUnchangedCells`

Precondition: `notebook.diffEditor.hasUnchangedCells && activeEditor == 'workbench.editor.notebookMultiTextDiffEditor'`

---

### Hide Unchanged Cells

ID: `notebook.diffEditor.hideUnchangedCells`

Precondition: `notebook.diffEditor.hasUnchangedCells && activeEditor == 'workbench.editor.notebookMultiTextDiffEditor'`

---

### Go To Cell

ID: `notebook.diffEditor.2.goToCell`

---

### Revert Notebook Metadata

ID: `notebook.diff.revertMetadata`

Precondition: `notebook.diffEditor.metadataChanged`

---

### Revert Input

ID: `notebook.diffEditor.2.cell.revertInput`

---

### Revert Outputs

ID: `notebook.diffEditor.2.cell.revertOutputs`

---

### Revert Metadata

ID: `notebook.diffEditor.2.cell.revertMetadata`

---

### Revert Metadata

ID: `notebook.diff.cell.revertMetadata`

Precondition: `notebook.diffEditor.cell.property.changed`

---

### Switch Output Rendering

ID: `notebook.diff.cell.switchOutputRenderingStyleToText`

---

### Revert Outputs

ID: `notebook.diff.cell.revertOutputs`

Precondition: `notebook.diffEditor.cell.property.changed`

---

### Show Leading/Trailing Whitespace Differences

ID: `notebook.toggle.diff.cell.ignoreTrimWhitespace`

Precondition: `notebook.diffEditor.cell.inputChanged`

---

### Revert Input

ID: `notebook.diff.cell.revertInput`

Precondition: `notebook.diffEditor.cell.inputChanged`

---

### Show Outputs Differences

ID: `notebook.diff.showOutputs`

Precondition: `activeEditor == 'workbench.editor.notebookMultiTextDiffEditor' || activeEditor == 'workbench.editor.notebookTextDiffEditor'`

---

### Show Metadata Differences

ID: `notebook.diff.showMetadata`

Precondition: `activeEditor == 'workbench.editor.notebookMultiTextDiffEditor' || activeEditor == 'workbench.editor.notebookTextDiffEditor'`

---

### Show Previous Change

ID: `notebook.diff.action.previous`

Default Keybinding:

- Windows: `Shift+Alt+F3`
- Linux: `Shift+Alt+F3`
- macOS: `Shift+Alt+F3`

When: `activeEditor == 'workbench.editor.notebookTextDiffEditor'`

---

### Show Next Change

ID: `notebook.diff.action.next`

Default Keybinding:

- Windows: `Alt+F3`
- Linux: `Alt+F3`
- macOS: `Alt+F3`

When: `activeEditor == 'workbench.editor.notebookTextDiffEditor'`

---

### Toggle Inline View

ID: `notebook.diff.inline.toggle`

---

### Go to Symbol in Editor...

ID: `workbench.action.gotoSymbol`

Default Keybinding:

- Windows: `Ctrl+Shift+O`
- Linux: `Ctrl+Shift+O`
- macOS: `Shift+Cmd+O`

When: `!accessibilityHelpIsShown && !accessibleViewIsShown`

---

### Focus Chat Input

ID: `workbench.action.chat.focusInput`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `inChat && !inChatInput && !quickChatHasFocus`

---

### Configure Code Completions...

ID: `workbench.action.chat.configureCodeCompletions`

Precondition: `chatSetupInstalled && !chatSetupDisabled && !chatSetupUntrusted`

---

### Upgrade GitHub Copilot Plan

ID: `workbench.action.chat.openQuotaExceededDialog`

---

### Send with #codebase

ID: `workbench.action.chat.submitWithCodebase`

Precondition: `chatInputHasText && !chatSessionRequestInProgress || chatPromptFileAttached && !chatSessionRequestInProgress`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `inChatInput`

---

### Delegate to Coding Agent

ID: `workbench.action.chat.createRemoteAgentJob`

Precondition: `chatInputHasText && !chatRemoteJobCreating && !chatSessionRequestInProgress`

---

### New Chat

ID: `workbench.action.chatEditor.newChat`

Precondition: `chatIsEnabled`

---

### Keep All Edits

ID: `chatEditing.multidiff.acceptAllFiles`

---

### Undo All Edits

ID: `chatEditing.multidiff.discardAllFiles`

---

### Getting Started with Chat Sessions

ID: `chat.sessions.gettingStarted`

---

### Hide Inline Chat Hint

ID: `inlineChat.hideHint`

Precondition: `inlineChatShowingHint`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Find

ID: `editor.action.extensioneditor.showfind`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

When: `!editorFocus && activeEditor == 'workbench.editor.extension'`

---

### Find Next

ID: `editor.action.extensioneditor.findNext`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'`

---

### Find Previous

ID: `editor.action.extensioneditor.findPrevious`

Default Keybinding:

- Windows: `Shift+Enter`
- Linux: `Shift+Enter`
- macOS: `Shift+Enter`

When: `webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'`

---

### Sign in to access Extensions Marketplace

ID: `workbench.extensions.actions.gallery.signIn`

---

### Debug Console: Focus Filter

ID: `repl.action.filter`

Precondition: `inDebugRepl`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

When: `textInputFocus`

---

### Debug Console: Focus Find

ID: `repl.action.find`

Precondition: `inDebugRepl`

Default Keybinding:

- Windows: `Ctrl+Alt+F`
- Linux: `Ctrl+Alt+F`
- macOS: `Alt+Cmd+F`

When: `inDebugRepl || focusedView == 'workbench.panel.repl.view'`

---

### Select Debug Console

ID: `workbench.action.debug.selectRepl`

---

### Clear Console

ID: `workbench.debug.panel.action.clearReplAction`

When: `focusedView == 'workbench.panel.repl.view'`

---

### Collapse All

ID: `debug.collapseRepl`

---

### Paste

ID: `debug.replPaste`

Precondition: `debugState != 'inactive'`

---

### Copy All

ID: `workbench.debug.action.copyAll`

---

### Copy

ID: `debug.replCopy`

---

### Change Sort Order

ID: `testing.coverageViewChangeSorting`

---

### Collapse All Coverage

ID: `testing.coverageViewCollapseAll`

---

### Open File

ID: `callStackWidget.goToFile`

---

### Rerun Test

ID: `testing.callStack.run`

---

### Debug Test

ID: `testing.callStack.debug`

---

### Collapse All Tests

ID: `testing.collapseAll`

---

### Turn on Continuous Run

ID: `testing.toggleContinuousRunForTest`

Precondition: `testing.isContinuousModeOn || !testing.isParentRunningContinuously`

---

### Start Continous Run Using...

ID: `testing.continuousRunUsingForTest`

---

### Run Test with Coverage

ID: `testing.coverage`

---

### Debug Test

ID: `testing.debug`

---

### Get Explorer Selection

ID: `_testing.getExplorerSelection`

---

### Get Selected Profiles

ID: `testing.getSelectedProfiles`

---

### Go to Test

ID: `testing.editFocusedTest`

Default Keybinding:

- Windows: `Alt+Enter`
- Linux: `Alt+Enter`
- macOS: `Alt+Enter`

When: `focusedView == 'workbench.view.testing'`

---

### Hide Test

ID: `testing.hideTest`

---

### Run Test

ID: `testing.run`

---

### Execute Using Profile...

ID: `testing.runUsing`

---

### Search for Test Extension

ID: `testing.searchForTestExtension`

---

### Sort by Duration

ID: `testing.sortByDuration`

---

### Sort by Location

ID: `testing.sortByLocation`

---

### Sort by Status

ID: `testing.sortByStatus`

---

### View as List

ID: `testing.viewAsList`

---

### View as Tree

ID: `testing.viewAsTree`

---

### Unhide All Tests

ID: `testing.unhideAllTests`

---

### Unhide Test

ID: `testing.unhideTest`

---

### Close

ID: `editor.closeTestPeek`

Precondition: `testing.isInPeek || testing.isPeekVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `!config.editor.stablePeek`

---

### Clear Command History

ID: `workbench.action.clearCommandHistory`

---

### Show All Commands

ID: `workbench.action.showCommands`

Default Keybinding:

- Windows: `Ctrl+Shift+P`
- Linux: `Ctrl+Shift+P`
- macOS: `Shift+Cmd+P`

Secondary Keybinding:

- Windows: `F1`
- Linux: `F1`
- macOS: `F1`

---

### Go to Symbol in Workspace...

ID: `workbench.action.showAllSymbols`

Default Keybinding:

- Windows: `Ctrl+T`
- Linux: `Ctrl+T`
- macOS: `Cmd+T`

---

### View as List

ID: `workbench.scm.action.setListViewMode`

---

### View as Tree

ID: `workbench.scm.action.setTreeViewMode`

---

### View as List

ID: `workbench.scm.action.setListViewModeNavigation`

---

### View as Tree

ID: `workbench.scm.action.setTreeViewModeNavigation`

---

### Sort by Discovery Time

ID: `workbench.scm.action.repositories.setSortKey.discoveryTime`

---

### Sort by Name

ID: `workbench.scm.action.repositories.setSortKey.name`

---

### Sort by Path

ID: `workbench.scm.action.repositories.setSortKey.path`

---

### Sort Changes by Name

ID: `workbench.scm.action.setSortKey.name`

Precondition: `scmViewMode == 'list'`

---

### Sort Changes by Path

ID: `workbench.scm.action.setSortKey.path`

Precondition: `scmViewMode == 'list'`

---

### Sort Changes by Status

ID: `workbench.scm.action.setSortKey.status`

Precondition: `scmViewMode == 'list'`

---

### Collapse All Repositories

ID: `workbench.scm.action.collapseAllRepositories`

---

### Expand All Repositories

ID: `workbench.scm.action.expandAllRepositories`

---

### Generate Commit Message

ID: `scm.input.triggerSetup`

---

### Pin the Current Selection

ID: `scm.repositories.pinSelection`

---

### Unpin the Current Selection

ID: `scm.repositories.unpinSelection`

---

### Repository Picker

ID: `workbench.scm.action.graph.pickRepository`

---

### History Item Reference Picker

ID: `workbench.scm.action.graph.pickHistoryItemRefs`

Precondition: `scmHistoryItemCount != '0'`

---

### Go to Current History Item

ID: `workbench.scm.action.graph.revealCurrentHistoryItem`

Precondition: `scmCurrentHistoryItemRefInFilter && scmHistoryItemCount != '0'`

---

### Refresh

ID: `workbench.scm.action.graph.refresh`

---

### View as List

ID: `workbench.scm.action.graph.setListViewMode`

---

### View as Tree

ID: `workbench.scm.action.graph.setTreeViewMode`

---

### Open Changes

ID: `workbench.scm.action.graph.viewChanges`

---

### Open File

ID: `workbench.scm.action.graph.openFile`

---

### Resolve Conflicts with AI

ID: `scm.editor.triggerSetup`

---

### Copy Value

ID: `workbench.debug.viewlet.action.copyWorkspaceVariableValue`

---

### Execute Notebook Variable Provider

ID: `_executeNotebookVariableProvider`

---

### Collapse All

ID: `callStack.collapse`

Precondition: `debugState == 'stopped'`

---

### Open Disassembly View

ID: `debug.action.openDisassemblyView`

Precondition: `focusedStackFrameHasInstructionReference`

---

### Toggle Source Code in Disassembly View

ID: `debug.action.toggleDisassemblyViewSourceCode`

---

### Debug: Toggle Breakpoint

ID: `editor.debug.action.toggleBreakpoint`

Precondition: `debuggersAvailable`

Default Keybinding:

- Windows: `F9`
- Linux: `F9`
- macOS: `F9`

When: `disassemblyViewFocus || editorTextFocus`

---

### Open 'launch.json'

ID: `workbench.action.debug.configure`

Precondition: `debugUx != 'simple'`

---

### Debug Console

ID: `debug.toggleReplIgnoreFocus`

---

### Collapse All

ID: `loadedScripts.collapse`

---

### Collapse All

ID: `watch.collapse`

Precondition: `watchExpressionsExist`

---

### Add Expression

ID: `workbench.debug.viewlet.action.addWatchExpression`

---

### Remove All Expressions

ID: `workbench.debug.viewlet.action.removeAllWatchExpressions`

Precondition: `watchExpressionsExist`

---

### Copy Expression

ID: `debug.copyWatchExpression`

Precondition: `watchExpressionsExist`

Default Keybinding:

- Windows: `Ctrl+Alt+C`
- Linux: `Ctrl+Alt+C`
- macOS: `Alt+Cmd+C`

When: `!expressionSelected && focusedView == 'workbench.debug.watchExpressionsView'`

---

### View as Tree

ID: `workbench.actions.table.workbench.panel.markers.view.viewAsTree`

---

### View as Table

ID: `workbench.actions.table.workbench.panel.markers.view.viewAsTable`

---

### Copy

ID: `problems.action.copy`

Default Keybinding:

- Windows: `Ctrl+C`
- Linux: `Ctrl+C`
- macOS: `Cmd+C`

When: `problemsVisibility && !relatedInformationFocus && focusedView == 'workbench.panel.markers.view'`

---

### Copy Message

ID: `problems.action.copyMessage`

---

### Copy Message

ID: `problems.action.copyRelatedInformationMessage`

---

### Focus problems view

ID: `problems.action.focusProblemsFromFilter`

Default Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `problemsFilterFocus`

---

### Focus problems filter

ID: `problems.action.focusFilter`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

When: `focusedView == 'workbench.panel.markers.view'`

---

### Collapse All

ID: `workbench.actions.treeView.workbench.panel.markers.view.collapseAll`

---

### Toggle Problems (Errors, Warnings, Infos)

ID: `workbench.actions.view.toggleProblems`

---

### Mixed Layout

ID: `merge.mixedLayout`

Precondition: `isMergeEditor`

---

### Column Layout

ID: `merge.columnLayout`

Precondition: `isMergeEditor`

---

### Open Merge Editor

ID: `_open.mergeEditor`

---

### Show Non-Conflicting Changes

ID: `merge.showNonConflictingChanges`

Precondition: `isMergeEditor`

---

### Show Base

ID: `merge.showBase`

---

### Show Base Top

ID: `merge.showBaseTop`

---

### Show Base Center

ID: `merge.showBaseCenter`

---

### Open File

ID: `multiDiffEditor.goToFile`

Precondition: `activeEditor == 'multiDiffEditor'`

---

### Collapse All Diffs

ID: `multiDiffEditor.collapseAll`

Precondition: `!multiDiffEditorAllCollapsed && activeEditor == 'multiDiffEditor'`

---

### Expand All Diffs

ID: `multiDiffEditor.expandAll`

Precondition: `multiDiffEditorAllCollapsed && activeEditor == 'multiDiffEditor'`

---

### Open Changes

ID: `_workbench.openScmMultiDiffEditor`

---

### Run Commands

ID: `runCommands`

---

### Collapse All

ID: `comments.collapse`

---

### Expand All

ID: `comments.expand`

---

### Reply

ID: `comments.reply`

Precondition: `canReply`

---

### Show find

ID: `editor.action.webvieweditor.showFind`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

When: `webviewFindWidgetEnabled && !editorFocus && activeEditor == 'WebviewEditor'`

---

### Stop find

ID: `editor.action.webvieweditor.hideFind`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `webviewFindWidgetVisible && !editorFocus && activeEditor == 'WebviewEditor'`

---

### Find next

ID: `editor.action.webvieweditor.findNext`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'`

---

### Find previous

ID: `editor.action.webvieweditor.findPrevious`

Default Keybinding:

- Windows: `Shift+Enter`
- Linux: `Shift+Enter`
- macOS: `Shift+Enter`

When: `webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'`

---

### Create New Terminal (With Profile)

ID: `workbench.action.terminal.newWithProfile`

Precondition: `terminalProcessSupported || terminalWebExtensionContributedProfile`

---

### Focus Accessible Terminal View

ID: `workbench.action.terminal.focusAccessibleBuffer`

Precondition: `terminalHasBeenCreated || terminalProcessSupported`

Default Keybinding:

- Windows: `Alt+F2`
- Linux: `Shift+Alt+F2`
- macOS: `Alt+F2`

Secondary Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow`

When: `accessibilityModeEnabled && terminalFocus`

---

### Rerun Task

ID: `workbench.action.tasks.rerunForActiveTerminal`

Precondition: `taskTerminalActive`

Default Keybinding:

- Windows: `Ctrl+Shift+R`
- Linux: `Ctrl+Shift+R`
- macOS: `Ctrl+Shift+R`

When: `terminalFocus`

---

### Toggle Screen Reader Accessibility Mode

ID: `editor.action.toggleScreenReaderAccessibilityMode`

Default Keybinding:

- Windows: `Ctrl+E`
- Linux: `Ctrl+E`
- macOS: `Cmd+E`

When: `accessibilityHelpIsShown`

---

### Go to Line/Column...

ID: `workbench.action.gotoLine`

Default Keybinding:

- Windows: `Ctrl+G`
- Linux: `Ctrl+G`
- macOS: `Ctrl+G`

---

### Toggle Column Selection Mode

ID: `editor.action.toggleColumnSelection`

---

### Toggle Multi-Cursor Modifier

ID: `workbench.action.toggleMultiCursorModifier`

---

### Read Line with Inlay Hints

ID: `inlayHints.startReadingLineWithHint`

Precondition: `editorHasInlayHintsProvider`

---

### Stop Inlay Hints Reading

ID: `inlayHints.stopReadingLineWithHint`

Precondition: `isReadingLineWithInlayHints`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Download Code - OSS Dev

ID: `workbench.action.download`

Precondition: `downloadUrl && isWeb`

---

### Peek Call Hierarchy

ID: `editor.showCallHierarchy`

Precondition: `editorHasCallHierarchyProvider && !inReferenceSearchEditor`

Default Keybinding:

- Windows: `Shift+Alt+H`
- Linux: `Shift+Alt+H`
- macOS: `Shift+Alt+H`

When: `editorTextFocus`

---

### Show Incoming Calls

ID: `editor.showIncomingCalls`

Precondition: `callHierarchyVisible && callHierarchyDirection == 'outgoingCalls'`

Default Keybinding:

- Windows: `Shift+Alt+H`
- Linux: `Shift+Alt+H`
- macOS: `Shift+Alt+H`

---

### Show Outgoing Calls

ID: `editor.showOutgoingCalls`

Precondition: `callHierarchyVisible && callHierarchyDirection == 'incomingCalls'`

Default Keybinding:

- Windows: `Shift+Alt+H`
- Linux: `Shift+Alt+H`
- macOS: `Shift+Alt+H`

---

### Refocus Call Hierarchy

ID: `editor.refocusCallHierarchy`

Precondition: `callHierarchyVisible`

Default Keybinding:

- Windows: `Shift+Enter`
- Linux: `Shift+Enter`
- macOS: `Shift+Enter`

---

### Close

ID: `editor.closeCallHierarchy`

Precondition: `callHierarchyVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `!config.editor.stablePeek`

---

### Peek Type Hierarchy

ID: `editor.showTypeHierarchy`

Precondition: `editorHasTypeHierarchyProvider && !inReferenceSearchEditor`

---

### Show Supertypes

ID: `editor.showSupertypes`

Precondition: `typeHierarchyVisible && typeHierarchyDirection == 'subtypes'`

Default Keybinding:

- Windows: `Shift+Alt+H`
- Linux: `Shift+Alt+H`
- macOS: `Shift+Alt+H`

---

### Show Subtypes

ID: `editor.showSubtypes`

Precondition: `typeHierarchyVisible && typeHierarchyDirection == 'supertypes'`

Default Keybinding:

- Windows: `Shift+Alt+H`
- Linux: `Shift+Alt+H`
- macOS: `Shift+Alt+H`

---

### Refocus Type Hierarchy

ID: `editor.refocusTypeHierarchy`

Precondition: `typeHierarchyVisible`

Default Keybinding:

- Windows: `Shift+Enter`
- Linux: `Shift+Enter`
- macOS: `Shift+Enter`

---

### Close

ID: `editor.closeTypeHierarchy`

Precondition: `typeHierarchyVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `!config.editor.stablePeek`

---

### Collapse All

ID: `outline.collapse`

---

### Expand All

ID: `outline.expand`

---

### Follow Cursor

ID: `outline.followCursor`

---

### Filter on Type

ID: `outline.filterOnType`

---

### Sort By: Position

ID: `outline.sortByPosition`

---

### Sort By: Name

ID: `outline.sortByName`

---

### Sort By: Category

ID: `outline.sortByKind`

---

### Detect Language from Content

ID: `editor.detectLanguage`

Precondition: `editorTextFocus && !notebookEditable`

Default Keybinding:

- Windows: `Shift+Alt+D`
- Linux: `Shift+Alt+D`
- macOS: `Shift+Alt+D`

---

### Install additional development environment options

ID: `workbench.action.continueOn.extensions`

---

### Compare with File

ID: `workbench.action.localHistory.compareWithFile`

---

### Compare with Previous

ID: `workbench.action.localHistory.compareWithPrevious`

---

### Select for Compare

ID: `workbench.action.localHistory.selectForCompare`

---

### Compare with Selected

ID: `workbench.action.localHistory.compareWithSelected`

---

### Show Contents

ID: `workbench.action.localHistory.open`

---

### Restore Contents

ID: `workbench.action.localHistory.restoreViaEditor`

---

### Restore Contents

ID: `workbench.action.localHistory.restore`

---

### Rename

ID: `workbench.action.localHistory.rename`

---

### Delete

ID: `workbench.action.localHistory.delete`

---

### Open Workspace

ID: `workbench.action.openWorkspaceFromEditor`

---

### Help: List Signal Sounds

ID: `signals.sounds.help`

---

### Help: List Signal Announcements

ID: `accessibility.announcement.help`

---

### Share

ID: `toggle.workbench.experimental.share.enabled`

---

### Switch Window...

ID: `workbench.action.switchWindow`

---

### Quick Switch Window...

ID: `workbench.action.quickSwitchWindow`

---

### Close Window

ID: `workbench.action.closeWindow`

Default Keybinding:

- Windows: `Alt+F4`
- Linux: `Alt+F4`
- macOS: `Shift+Cmd+W`

Secondary Keybinding:

- Windows: `Ctrl+Shift+W`
- Linux: `Ctrl+Shift+W`
- macOS: ``

---

### Toggle Window Always on Top

ID: `workbench.action.toggleWindowAlwaysOnTop`

Precondition: `isAuxiliaryWindowFocusedContext`

---

### Turn On Always on Top

ID: `workbench.action.enableWindowAlwaysOnTop`

---

### Turn Off Always on Top

ID: `workbench.action.disableWindowAlwaysOnTop`

---

### Start Extension Host Profile

ID: `workbench.extensions.action.extensionHostProfile`

Precondition: `profileSessionState == 'none'`

---

### Stop Extension Host Profile

ID: `workbench.extensions.action.stopExtensionHostProfile`

---

### Save Extension Host Profile

ID: `workbench.extensions.action.saveExtensionHostProfile`

Precondition: `extensionHostProfileRecorded`

---

### Open Extension Host Profile

ID: `workbench.extensions.action.openExtensionHostProfile`

Precondition: `extensionHostProfileRecorded`

---

### Open Containing Folder

ID: `workbench.action.localHistory.revealInOS`

---

### Hold to Voice Chat in Chat View

ID: `workbench.action.chat.holdToVoiceChatInChatView`

Default Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Cmd+I`

When: `chatIsEnabled && hasSpeechProvider && !chatSessionRequestInProgress && !editorFocus && !inChatInput && !inSettingsEditor && !inlineChatFocused && !notebookEditorFocused && !searchViewletFocus`

---

### Read Aloud

ID: `workbench.action.chat.readChatResponseAloud`

Precondition: `chatIsEnabled && hasSpeechProvider`

---

### Stop Reading Aloud

ID: `workbench.action.chat.stopReadChatItemAloud`

Precondition: `scopedChatSynthesisInProgress`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

### Reset Location

ID: `workbench.panel.chat.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.view.extensions.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.view.extension.test.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.view.explorer.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.view.search.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.view.scm.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.view.debug.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.view.remote.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.panel.testResults.resetViewContainerLocation`

---

### Reset Location

ID: `refactorPreview.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.panel.repl.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.panel.markers.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.panel.output.resetViewContainerLocation`

---

### Reset Location

ID: `terminal.resetViewContainerLocation`

---

### Reset Location

ID: `workbench.panel.chat.view.copilot.resetViewLocation`

---

### Reset Location

ID: `workbench.view.testing.resetViewLocation`

---

### Reset Location

ID: `workbench.view.testCoverage.resetViewLocation`

---

### Reset Location

ID: `outline.resetViewLocation`

---

### Reset Location

ID: `timeline.resetViewLocation`

---

### Reset Location

ID: `workbench.view.search.resetViewLocation`

---

### Reset Location

ID: `workbench.scm.repositories.resetViewLocation`

---

### Reset Location

ID: `workbench.scm.resetViewLocation`

---

### Reset Location

ID: `workbench.scm.history.resetViewLocation`

---

### Reset Location

ID: `workbench.debug.welcome.resetViewLocation`

---

### Reset Location

ID: `workbench.debug.variablesView.resetViewLocation`

---

### Reset Location

ID: `workbench.debug.watchExpressionsView.resetViewLocation`

---

### Reset Location

ID: `workbench.debug.callStackView.resetViewLocation`

---

### Reset Location

ID: `workbench.debug.loadedScriptsView.resetViewLocation`

---

### Reset Location

ID: `workbench.debug.breakPointsView.resetViewLocation`

---

### Reset Location

ID: `workbench.panel.testResults.view.resetViewLocation`

---

### Reset Location

ID: `refactorPreview.resetViewLocation`

---

### Reset Location

ID: `workbench.panel.repl.view.resetViewLocation`

---

### Reset Location

ID: `workbench.panel.markers.view.resetViewLocation`

---

### Reset Location

ID: `workbench.panel.output.resetViewLocation`

---

### Reset Location

ID: `terminal.resetViewLocation`

---

### Settings

ID: `workbench.action.openSettings`

Default Keybinding:

- Windows: `Ctrl+,`
- Linux: `Ctrl+,`
- macOS: `Cmd+,`

---

### &&Online Services Settings

ID: `settings.filterByOnline`

---

### Show untrusted workspace settings

ID: `settings.filterUntrusted`

---

### &&Telemetry Settings

ID: `settings.filterByTelemetry`

---

### Focus settings file

ID: `settings.action.focusSettingsFile`

Precondition: `inSettingsSearch && !suggestWidgetVisible`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

---

### Focus settings file

ID: `settings.action.focusSettingsFromSearch`

Precondition: `inSettingsSearch && !suggestWidgetVisible`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

---

### Focus settings list

ID: `settings.action.focusSettingsList`

Precondition: `inSettingsEditor && settingsTocRowFocus`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

---

### Focus Setting Control

ID: `settings.action.focusSettingControl`

Precondition: `inSettingsEditor && settingRowFocus`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

---

### Show System Keybindings

ID: `keybindings.editor.showDefaultKeybindings`

---

### Show Extension Keybindings

ID: `keybindings.editor.showExtensionKeybindings`

---

### Show User Keybindings

ID: `keybindings.editor.showUserKeybindings`

---

### Clear Search Results

ID: `keybindings.editor.clearSearchResults`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `inKeybindings && inKeybindingsSearch`

---

### Define Keybinding

ID: `editor.action.defineKeybinding`

Precondition: `resource == 'vscode-userdata:/home/runner/.config/code-oss-dev/User/keybindings.json'`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+K`
- Linux: `Ctrl+K Ctrl+K`
- macOS: `Cmd+K Cmd+K`

When: `resource == 'vscode-userdata:/home/runner/.config/code-oss-dev/User/keybindings.json'`

---

### Toggle Activity Bar Visibility

ID: `workbench.action.toggleActivityBarVisibility`

---

### Profiles

ID: `workbench.profiles.actions.manageProfiles`

---

### Default

ID: `workbench.profiles.actions.profileEntry.__default__profile__`

---

### Default

ID: `workbench.action.openProfile.Default`

---

### Reset Location

ID: `workbench.explorer.openEditorsView.resetViewLocation`

---

### Reset Location

ID: `workbench.explorer.emptyView.resetViewLocation`

---

### Reset Location

ID: `workbench.view.extension.references-view.resetViewContainerLocation`

---

### Reset Location

ID: `jsBrowserBreakpoints.resetViewLocation`

---

### Reset Location

ID: `jsExcludedCallers.resetViewLocation`

---

### Reset Location

ID: `jsDebugNetworkTree.resetViewLocation`

---

### Reset Location

ID: `npm.resetViewLocation`

---

### Reset Location

ID: `references-view.tree.resetViewLocation`

---

### Chat

ID: `workbench.panel.chat.view.copilot.toggleVisibility`

Precondition: `false`

---

### Hide 'Chat'

ID: `workbench.panel.chat.view.copilot.removeView`

Precondition: `false`

---

### Open Editors

ID: `workbench.explorer.openEditorsView.toggleVisibility`

Precondition: `true`

---

### Hide 'Open Editors'

ID: `workbench.explorer.openEditorsView.removeView`

Precondition: `true`

---

### No Folder Opened

ID: `workbench.explorer.emptyView.toggleVisibility`

Precondition: `true`

---

### Hide 'No Folder Opened'

ID: `workbench.explorer.emptyView.removeView`

Precondition: `true`

---

### Outline

ID: `outline.toggleVisibility`

Precondition: `true`

---

### Hide 'Outline'

ID: `outline.removeView`

Precondition: `true`

---

### Timeline

ID: `timeline.toggleVisibility`

Precondition: `true`

---

### Hide 'Timeline'

ID: `timeline.removeView`

Precondition: `true`

---

### Search

ID: `workbench.view.search.toggleVisibility`

Precondition: `false`

---

### Hide 'Search'

ID: `workbench.view.search.removeView`

Precondition: `false`

---

### Changes

ID: `workbench.scm.toggleVisibility`

Precondition: `false`

---

### Hide 'Changes'

ID: `workbench.scm.removeView`

Precondition: `false`

---

### Problems

ID: `workbench.panel.markers.view.toggleVisibility`

Precondition: `false`

---

### Hide 'Problems'

ID: `workbench.panel.markers.view.removeView`

Precondition: `false`

---

### Output

ID: `workbench.panel.output.toggleVisibility`

Precondition: `false`

---

### Hide 'Output'

ID: `workbench.panel.output.removeView`

Precondition: `false`

---

### Terminal

ID: `terminal.toggleVisibility`

Precondition: `false`

---

### Hide 'Terminal'

ID: `terminal.removeView`

Precondition: `false`

---

### Open Settings (UI)

ID: `_workbench.openUserSettingsEditor`

---

### Open Settings (JSON)

ID: `settings.switchToJSON`

---

### Variables

ID: `workbench.debug.variablesView.toggleVisibility`

Precondition: `true`

---

### Hide 'Variables'

ID: `workbench.debug.variablesView.removeView`

Precondition: `true`

---

### Watch

ID: `workbench.debug.watchExpressionsView.toggleVisibility`

Precondition: `true`

---

### Hide 'Watch'

ID: `workbench.debug.watchExpressionsView.removeView`

Precondition: `true`

---

### Call Stack

ID: `workbench.debug.callStackView.toggleVisibility`

Precondition: `true`

---

### Hide 'Call Stack'

ID: `workbench.debug.callStackView.removeView`

Precondition: `true`

---

### Breakpoints

ID: `workbench.debug.breakPointsView.toggleVisibility`

Precondition: `true`

---

### Hide 'Breakpoints'

ID: `workbench.debug.breakPointsView.removeView`

Precondition: `true`

---

### Install Extension VSIX

ID: `workbench.extensions.command.installFromVSIX`

---

### AI

ID: `extensions.actions.searchByCategory.AI`

---

### Azure

ID: `extensions.actions.searchByCategory.Azure`

---

### Chat

ID: `extensions.actions.searchByCategory.Chat`

---

### Data Science

ID: `extensions.actions.searchByCategory.Data Science`

---

### Debuggers

ID: `extensions.actions.searchByCategory.Debuggers`

---

### Extension Packs

ID: `extensions.actions.searchByCategory.Extension Packs`

---

### Education

ID: `extensions.actions.searchByCategory.Education`

---

### Formatters

ID: `extensions.actions.searchByCategory.Formatters`

---

### Keymaps

ID: `extensions.actions.searchByCategory.Keymaps`

---

### Language Packs

ID: `extensions.actions.searchByCategory.Language Packs`

---

### Linters

ID: `extensions.actions.searchByCategory.Linters`

---

### Machine Learning

ID: `extensions.actions.searchByCategory.Machine Learning`

---

### Notebooks

ID: `extensions.actions.searchByCategory.Notebooks`

---

### Programming Languages

ID: `extensions.actions.searchByCategory.Programming Languages`

---

### SCM Providers

ID: `extensions.actions.searchByCategory.SCM Providers`

---

### Snippets

ID: `extensions.actions.searchByCategory.Snippets`

---

### Testing

ID: `extensions.actions.searchByCategory.Testing`

---

### Themes

ID: `extensions.actions.searchByCategory.Themes`

---

### Visualization

ID: `extensions.actions.searchByCategory.Visualization`

---

### Other

ID: `extensions.actions.searchByCategory.Other`

---

### Install Count

ID: `extensions.sort.installs`

Precondition: `!builtInExtensions && gallerySortCapabilities =~ /_InstallCount_/ && !(extensionsSearchValue =~ /^@feature:/)`

---

### Rating

ID: `extensions.sort.rating`

Precondition: `!builtInExtensions && gallerySortCapabilities =~ /_WeightedRating_/ && !(extensionsSearchValue =~ /^@feature:/)`

---

### Name

ID: `extensions.sort.name`

Precondition: `!builtInExtensions && gallerySortCapabilities =~ /_Title_/ && !(extensionsSearchValue =~ /^@feature:/)`

---

### Published Date

ID: `extensions.sort.publishedDate`

Precondition: `!builtInExtensions && gallerySortCapabilities =~ /_PublishedDate_/ && !(extensionsSearchValue =~ /^@feature:/)`

---

### Updated Date

ID: `extensions.sort.updateDate`

Precondition: `!builtInExtensions && !recommendedExtensions && !searchMarketplaceExtensions && gallerySortCapabilities =~ /_UpdateDate_/ && !(extensionsSearchValue =~ /^@feature:/)`

---

### Install Workspace Recommended Extensions

ID: `workbench.extensions.action.installWorkspaceRecommendedExtensions`

---

### Configure Recommended Extensions (Workspace Folder)

ID: `workbench.extensions.action.configureWorkspaceFolderRecommendedExtensions`

---

### Set Color Theme

ID: `workbench.extensions.action.setColorTheme`

---

### Set File Icon Theme

ID: `workbench.extensions.action.setFileIconTheme`

---

### Set Product Icon Theme

ID: `workbench.extensions.action.setProductIconTheme`

---

### Show Pre-Release Version

ID: `workbench.extensions.action.showPreReleaseVersion`

---

### Show Release Version

ID: `workbench.extensions.action.showReleasedVersion`

---

### Clear Display Language

ID: `workbench.extensions.action.clearLanguage`

---

### Install

ID: `workbench.extensions.action.installUnsigned`

---

### Install (Do not Sync)

ID: `workbench.extensions.action.installAndDonotSync`

---

### Install Pre-Release (Do not Sync)

ID: `workbench.extensions.action.installPrereleaseAndDonotSync`

---

### Install Specific Version...

ID: `workbench.extensions.action.install.anotherVersion`

---

### Copy

ID: `workbench.extensions.action.copyExtension`

---

### Copy Extension ID

ID: `workbench.extensions.action.copyExtensionId`

---

### Copy Link

ID: `workbench.extensions.action.copyLink`

---

### Settings

ID: `workbench.extensions.action.configure`

---

### Download VSIX

ID: `workbench.extensions.action.download`

---

### Download Pre-Release VSIX

ID: `workbench.extensions.action.downloadPreRelease`

---

### Download Specific Version VSIX...

ID: `workbench.extensions.action.downloadSpecificVersion`

---

### Account Preferences

ID: `workbench.extensions.action.manageAccountPreferences`

---

### Keyboard Shortcuts

ID: `workbench.extensions.action.configureKeybindings`

---

### Apply Extension to all Profiles

ID: `workbench.extensions.action.toggleApplyToAllProfiles`

---

### Sync This Extension

ID: `workbench.extensions.action.toggleIgnoreExtension`

---

### Ignore Recommendation

ID: `workbench.extensions.action.ignoreRecommendation`

---

### Undo Ignored Recommendation

ID: `workbench.extensions.action.undoIgnoredRecommendation`

---

### Add to Workspace Recommendations

ID: `workbench.extensions.action.addExtensionToWorkspaceRecommendations`

---

### Remove from Workspace Recommendations

ID: `workbench.extensions.action.removeExtensionFromWorkspaceRecommendations`

---

### Reset Location

ID: `workbench.views.extensions.installed.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.popular.resetViewLocation`

---

### Reset Location

ID: `extensions.recommendedList.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.enabled.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.disabled.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.marketplace.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.searchInstalled.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.searchRecentlyUpdated.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.searchEnabled.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.searchDisabled.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.searchOutdated.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.searchBuiltin.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.searchWorkspaceUnsupported.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.workspaceRecommendations.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.otherRecommendations.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.builtinFeatureExtensions.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.builtinThemeExtensions.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.builtinProgrammingLanguageExtensions.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.untrustedUnsupportedExtensions.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.untrustedPartiallySupportedExtensions.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.virtualUnsupportedExtensions.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.virtualPartiallySupportedExtensions.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.deprecatedExtensions.resetViewLocation`

---

### Reset Location

ID: `workbench.views.extensions.marketplaceAccess.resetViewLocation`

---

### Reset Location

ID: `workbench.views.mcp.installed.resetViewLocation`

---

### Reset Location

ID: `workbench.views.mcp.default.marketplace.resetViewLocation`

---

### Reset Location

ID: `workbench.views.mcp.marketplace.resetViewLocation`

---

### Reset Location

ID: `workbench.views.mcp.default.welcomeView.resetViewLocation`

---

### Reset Location

ID: `workbench.views.mcp.welcomeView.resetViewLocation`

---

### Switch Output

ID: `workbench.output.action.switchBetweenOutputs`

---

### Tasks

ID: `workbench.action.output.show.tasks`

---

### Main

ID: `workbench.action.output.show.main`

---

### Window

ID: `workbench.action.output.show.rendererLog`

---

### Terminal

ID: `workbench.action.output.show.terminal`

---

### Toggle Auto Scrolling

ID: `workbench.output.action.toggleAutoScroll`

---

### Open Output in Editor

ID: `workbench.action.openActiveLogOutputFile`

---

### Open Output in New Window

ID: `workbench.action.openActiveLogOutputFileInNewWindow`

---

### Save Output As...

ID: `workbench.action.saveActiveLogOutputAs`

---

### Trace

ID: `workbench.action.output.activeOutputLogLevel.1`

---

### Debug

ID: `workbench.action.output.activeOutputLogLevel.2`

---

### Info

ID: `workbench.action.output.activeOutputLogLevel.3`

---

### Warning

ID: `workbench.action.output.activeOutputLogLevel.4`

---

### Error

ID: `workbench.action.output.activeOutputLogLevel.5`

---

### Off

ID: `workbench.action.output.activeOutputLogLevel.0`

---

### Set As Default

ID: `workbench.action.output.activeOutputLogLevelDefault`

Precondition: `!activeLogOutput.levelIsDefault`

---

### Trace

ID: `workbench.actions.workbench.panel.output.toggle.trace`

---

### Debug

ID: `workbench.actions.workbench.panel.output.toggle.debug`

---

### Info

ID: `workbench.actions.workbench.panel.output.toggle.info`

---

### Warning

ID: `workbench.actions.workbench.panel.output.toggle.warn`

---

### Error

ID: `workbench.actions.workbench.panel.output.toggle.error`

---

### Clear filters text

ID: `workbench.actions.workbench.panel.output.clearFilterText`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `outputFilterFocus`

---

### Reset Location

ID: `~remote.forwardedPortsContainer.resetViewContainerLocation`

---

### Reset Location

ID: `~remote.forwardedPorts.resetViewLocation`

---

### Ports

ID: `~remote.forwardedPorts.toggleVisibility`

Precondition: `false`

---

### Hide 'Ports'

ID: `~remote.forwardedPorts.removeView`

Precondition: `false`

---

### Shared

ID: `workbench.action.output.show.shared`

---

### Remote Tunnel Service

ID: `workbench.action.output.show.remoteTunnelService`

---

### Settings Sync

ID: `workbench.action.output.show.userDataSync`

---

### Sign out of account

ID: `_signOutOfAccount`

---

### Extension Host

ID: `workbench.action.output.show.exthost`

---

### Debug Console

ID: `workbench.panel.repl.view.toggleVisibility`

Precondition: `false`

---

### Hide 'Debug Console'

ID: `workbench.panel.repl.view.removeView`

Precondition: `false`

---

### Run

ID: `workbench.debug.welcome.toggleVisibility`

Precondition: `false`

---

### Hide 'Run'

ID: `workbench.debug.welcome.removeView`

Precondition: `false`

---

### Git

ID: `workbench.action.output.show.vscode.git.Git`

---

### GitHub

ID: `workbench.action.output.show.vscode.github.GitHub`

---

### Configure Display Language

ID: `workbench.action.configureLocale`

---

### Clear Display Language Preference

ID: `workbench.action.clearLocalePreference`

---

###

ID: `editor.action.setSelectionAnchor`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+B`
- Linux: `Ctrl+K Ctrl+B`
- macOS: `Cmd+K Cmd+B`

When: `editorTextFocus`

---

###

ID: `editor.action.goToSelectionAnchor`

Precondition: `selectionAnchorSet`

---

###

ID: `editor.action.selectFromAnchorToCursor`

Precondition: `selectionAnchorSet`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+K`
- Linux: `Ctrl+K Ctrl+K`
- macOS: `Cmd+K Cmd+K`

When: `editorTextFocus`

---

###

ID: `editor.action.cancelSelectionAnchor`

Precondition: `selectionAnchorSet`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

When: `editorTextFocus`

---

###

ID: `editor.action.selectToBracket`

---

###

ID: `editor.action.jumpToBracket`

Default Keybinding:

- Windows: `Ctrl+Shift+\`
- Linux: `Ctrl+Shift+\`
- macOS: `Shift+Cmd+\`

When: `editorTextFocus`

---

###

ID: `editor.action.removeBrackets`

Default Keybinding:

- Windows: `Ctrl+Alt+Backspace`
- Linux: `Ctrl+Alt+Backspace`
- macOS: `Alt+Cmd+Backspace`

When: `editorTextFocus`

---

###

ID: `editor.action.moveCarretLeftAction`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.moveCarretRightAction`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.transposeLetters`

Precondition: `!editorReadonly`

When: `textInputFocus`

---

###

ID: `editor.action.clipboardCopyWithSyntaxHighlightingAction`

When: `textInputFocus`

---

###

ID: `editor.action.quickFix`

Precondition: `editorHasCodeActionsProvider && !editorReadonly`

Default Keybinding:

- Windows: `Ctrl+.`
- Linux: `Ctrl+.`
- macOS: `Cmd+.`

When: `textInputFocus`

---

###

ID: `editor.action.refactor`

Precondition: `editorHasCodeActionsProvider && !editorReadonly`

Default Keybinding:

- Windows: `Ctrl+Shift+R`
- Linux: `Ctrl+Shift+R`
- macOS: `Ctrl+Shift+R`

When: `textInputFocus`

---

###

ID: `editor.action.sourceAction`

Precondition: `editorHasCodeActionsProvider && !editorReadonly`

---

###

ID: `editor.action.organizeImports`

Precondition: `!editorReadonly && supportedCodeAction =~ /(\s|^)source\.organizeImports\b/`

Default Keybinding:

- Windows: `Shift+Alt+O`
- Linux: `Shift+Alt+O`
- macOS: `Shift+Alt+O`

When: `textInputFocus`

---

###

ID: `editor.action.autoFix`

Precondition: `!editorReadonly && supportedCodeAction =~ /(\s|^)quickfix\b/`

Default Keybinding:

- Windows: `Shift+Alt+.`
- Linux: `Shift+Alt+.`
- macOS: `Alt+Cmd+.`

When: `textInputFocus`

---

###

ID: `editor.action.fixAll`

Precondition: `!editorReadonly && supportedCodeAction =~ /(\s|^)source\.fixAll\b/`

---

###

ID: `codelens.showLensesInCurrentLine`

Precondition: `editorHasCodeLensProvider`

---

###

ID: `editor.action.hideColorPicker`

Precondition: `standaloneColorPickerVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

###

ID: `editor.action.insertColorWithStandaloneColorPicker`

Precondition: `standaloneColorPickerFocused`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

---

###

ID: `editor.action.commentLine`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+/`
- Linux: `Ctrl+/`
- macOS: `Cmd+/`

When: `editorTextFocus`

---

###

ID: `editor.action.addCommentLine`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+C`
- Linux: `Ctrl+K Ctrl+C`
- macOS: `Cmd+K Cmd+C`

When: `editorTextFocus`

---

###

ID: `editor.action.removeCommentLine`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+U`
- Linux: `Ctrl+K Ctrl+U`
- macOS: `Cmd+K Cmd+U`

When: `editorTextFocus`

---

###

ID: `editor.action.blockComment`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Shift+Alt+A`
- Linux: `Ctrl+Shift+A`
- macOS: `Shift+Alt+A`

When: `editorTextFocus`

---

###

ID: `editor.action.showContextMenu`

Default Keybinding:

- Windows: `Shift+F10`
- Linux: `Shift+F10`
- macOS: `Shift+F10`

When: `textInputFocus`

---

###

ID: `cursorUndo`

Default Keybinding:

- Windows: `Ctrl+U`
- Linux: `Ctrl+U`
- macOS: `Cmd+U`

When: `textInputFocus`

---

###

ID: `cursorRedo`

---

###

ID: `editor.action.pasteAs`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.pasteAsText`

Precondition: `!editorReadonly`

---

###

ID: `actions.find`

Precondition: `editorFocus || editorIsOpen`

Default Keybinding:

- Windows: `Ctrl+F`
- Linux: `Ctrl+F`
- macOS: `Cmd+F`

---

###

ID: `editor.action.nextMatchFindAction`

Default Keybinding:

- Windows: `F3`
- Linux: `F3`
- macOS: `Cmd+G`

When: `editorFocus`

---

###

ID: `editor.action.previousMatchFindAction`

Default Keybinding:

- Windows: `Shift+F3`
- Linux: `Shift+F3`
- macOS: `Shift+Cmd+G`

When: `editorFocus`

---

###

ID: `editor.action.startFindReplaceAction`

Precondition: `editorFocus || editorIsOpen`

Default Keybinding:

- Windows: `Ctrl+H`
- Linux: `Ctrl+H`
- macOS: `Alt+Cmd+F`

---

###

ID: `editor.actions.findWithArgs`

---

###

ID: `actions.findWithSelection`

---

###

ID: `editor.action.goToMatchFindAction`

Precondition: `findWidgetVisible`

---

###

ID: `editor.action.nextSelectionMatchFindAction`

Default Keybinding:

- Windows: `Ctrl+F3`
- Linux: `Ctrl+F3`
- macOS: `Cmd+F3`

When: `editorFocus`

---

###

ID: `editor.action.previousSelectionMatchFindAction`

Default Keybinding:

- Windows: `Ctrl+Shift+F3`
- Linux: `Ctrl+Shift+F3`
- macOS: `Shift+Cmd+F3`

When: `editorFocus`

---

###

ID: `editor.unfold`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+Shift+]`
- Linux: `Ctrl+Shift+]`
- macOS: `Alt+Cmd+]`

When: `editorTextFocus`

---

###

ID: `editor.unfoldRecursively`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+]`
- Linux: `Ctrl+K Ctrl+]`
- macOS: `Cmd+K Cmd+]`

When: `editorTextFocus`

---

###

ID: `editor.fold`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+Shift+[`
- Linux: `Ctrl+Shift+[`
- macOS: `Alt+Cmd+[`

When: `editorTextFocus`

---

###

ID: `editor.foldRecursively`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+[`
- Linux: `Ctrl+K Ctrl+[`
- macOS: `Cmd+K Cmd+[`

When: `editorTextFocus`

---

###

ID: `editor.toggleFoldRecursively`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+Shift+L`
- Linux: `Ctrl+K Ctrl+Shift+L`
- macOS: `Cmd+K Shift+Cmd+L`

When: `editorTextFocus`

---

###

ID: `editor.foldAll`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+0`
- Linux: `Ctrl+K Ctrl+0`
- macOS: `Cmd+K Cmd+0`

When: `editorTextFocus`

---

###

ID: `editor.unfoldAll`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+J`
- Linux: `Ctrl+K Ctrl+J`
- macOS: `Cmd+K Cmd+J`

When: `editorTextFocus`

---

###

ID: `editor.foldAllBlockComments`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+/`
- Linux: `Ctrl+K Ctrl+/`
- macOS: `Cmd+K Cmd+/`

When: `editorTextFocus`

---

###

ID: `editor.foldAllMarkerRegions`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+8`
- Linux: `Ctrl+K Ctrl+8`
- macOS: `Cmd+K Cmd+8`

When: `editorTextFocus`

---

###

ID: `editor.unfoldAllMarkerRegions`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+9`
- Linux: `Ctrl+K Ctrl+9`
- macOS: `Cmd+K Cmd+9`

When: `editorTextFocus`

---

###

ID: `editor.foldAllExcept`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+-`
- Linux: `Ctrl+K Ctrl+-`
- macOS: `Cmd+K Cmd+-`

When: `editorTextFocus`

---

###

ID: `editor.unfoldAllExcept`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+=`
- Linux: `Ctrl+K Ctrl+=`
- macOS: `Cmd+K Cmd+=`

When: `editorTextFocus`

---

###

ID: `editor.toggleFold`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+L`
- Linux: `Ctrl+K Ctrl+L`
- macOS: `Cmd+K Cmd+L`

When: `editorTextFocus`

---

###

ID: `editor.gotoParentFold`

Precondition: `foldingEnabled`

When: `editorTextFocus`

---

###

ID: `editor.gotoPreviousFold`

Precondition: `foldingEnabled`

When: `editorTextFocus`

---

###

ID: `editor.gotoNextFold`

Precondition: `foldingEnabled`

When: `editorTextFocus`

---

###

ID: `editor.createFoldingRangeFromSelection`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+,`
- Linux: `Ctrl+K Ctrl+,`
- macOS: `Cmd+K Cmd+,`

When: `editorTextFocus`

---

###

ID: `editor.removeManualFoldingRanges`

Precondition: `foldingEnabled`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+.`
- Linux: `Ctrl+K Ctrl+.`
- macOS: `Cmd+K Cmd+.`

When: `editorTextFocus`

---

###

ID: `editor.toggleImportFold`

Precondition: `foldingEnabled`

When: `editorTextFocus`

---

###

ID: `editor.action.fontZoomIn`

---

###

ID: `editor.action.fontZoomOut`

---

###

ID: `editor.action.fontZoomReset`

---

###

ID: `editor.action.formatDocument`

Precondition: `editorHasDocumentFormattingProvider && !editorReadonly && !inCompositeEditor`

Default Keybinding:

- Windows: `Shift+Alt+F`
- Linux: `Ctrl+Shift+I`
- macOS: `Shift+Alt+F`

When: `editorTextFocus`

---

###

ID: `editor.action.formatSelection`

Precondition: `editorHasDocumentSelectionFormattingProvider && !editorReadonly`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+F`
- Linux: `Ctrl+K Ctrl+F`
- macOS: `Cmd+K Cmd+F`

When: `editorTextFocus`

---

###

ID: `editor.action.copyLinesUpAction`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Shift+Alt+UpArrow`
- Linux: `Ctrl+Shift+Alt+UpArrow`
- macOS: `Shift+Alt+UpArrow`

When: `editorTextFocus`

---

###

ID: `editor.action.copyLinesDownAction`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Shift+Alt+DownArrow`
- Linux: `Ctrl+Shift+Alt+DownArrow`
- macOS: `Shift+Alt+DownArrow`

When: `editorTextFocus`

---

###

ID: `editor.action.duplicateSelection`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.moveLinesUpAction`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Alt+UpArrow`
- Linux: `Alt+UpArrow`
- macOS: `Alt+UpArrow`

When: `editorTextFocus`

---

###

ID: `editor.action.moveLinesDownAction`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Alt+DownArrow`
- Linux: `Alt+DownArrow`
- macOS: `Alt+DownArrow`

When: `editorTextFocus`

---

###

ID: `editor.action.sortLinesAscending`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.sortLinesDescending`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.removeDuplicateLines`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.trimTrailingWhitespace`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+X`
- Linux: `Ctrl+K Ctrl+X`
- macOS: `Cmd+K Cmd+X`

When: `editorTextFocus`

---

###

ID: `editor.action.deleteLines`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+Shift+K`
- Linux: `Ctrl+Shift+K`
- macOS: `Shift+Cmd+K`

When: `textInputFocus`

---

###

ID: `editor.action.indentLines`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+]`
- Linux: `Ctrl+]`
- macOS: `Cmd+]`

When: `editorTextFocus`

---

###

ID: `editor.action.outdentLines`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+[`
- Linux: `Ctrl+[`
- macOS: `Cmd+[`

When: `editorTextFocus`

---

###

ID: `editor.action.insertLineBefore`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+Shift+Enter`
- Linux: `Ctrl+Shift+Enter`
- macOS: `Shift+Cmd+Enter`

When: `editorTextFocus`

---

###

ID: `editor.action.insertLineAfter`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+Enter`
- Linux: `Ctrl+Enter`
- macOS: `Cmd+Enter`

When: `editorTextFocus`

---

###

ID: `deleteAllLeft`

Precondition: `!editorReadonly`

When: `textInputFocus`

---

###

ID: `deleteAllRight`

Precondition: `!editorReadonly`

When: `textInputFocus`

---

###

ID: `editor.action.joinLines`

Precondition: `!editorReadonly`

When: `editorTextFocus`

---

###

ID: `editor.action.transpose`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.transformToUppercase`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.transformToLowercase`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.reverseLines`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.transformToSnakecase`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.transformToCamelcase`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.transformToPascalcase`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.transformToTitlecase`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.transformToKebabcase`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.triggerSuggest`

Precondition: `editorHasCompletionItemProvider && !editorReadonly && !suggestWidgetVisible`

Default Keybinding:

- Windows: `Ctrl+Space`
- Linux: `Ctrl+Space`
- macOS: `Ctrl+Space`

Secondary Keybinding:

- Windows: `Ctrl+I`
- Linux: `Ctrl+I`
- macOS: `Alt+Escape, Cmd+I`

When: `textInputFocus`

---

###

ID: `editor.action.resetSuggestSize`

---

###

ID: `editor.action.inlineSuggest.trigger`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.inlineSuggest.triggerInlineEditExplicit`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.inlineSuggest.showNext`

Precondition: `inlineSuggestionVisible && !editorReadonly`

Default Keybinding:

- Windows: `Alt+]`
- Linux: `Alt+]`
- macOS: `Alt+]`

---

###

ID: `editor.action.inlineSuggest.showPrevious`

Precondition: `inlineSuggestionVisible && !editorReadonly`

Default Keybinding:

- Windows: `Alt+[`
- Linux: `Alt+[`
- macOS: `Alt+[`

---

###

ID: `editor.action.inlineSuggest.acceptNextWord`

Precondition: `inlineSuggestionVisible && !editorReadonly`

Default Keybinding:

- Windows: `Ctrl+RightArrow`
- Linux: `Ctrl+RightArrow`
- macOS: `Cmd+RightArrow`

When: `cursorBeforeGhostText && inlineSuggestionVisible && !accessibilityModeEnabled && !editorReadonly`

---

###

ID: `editor.action.inlineSuggest.acceptNextLine`

Precondition: `inlineSuggestionVisible && !editorReadonly`

---

###

ID: `editor.action.inlineSuggest.commit`

Precondition: `inlineEditIsVisible || inlineSuggestionVisible`

Default Keybinding:

- Windows: `Tab`
- Linux: `Tab`
- macOS: `Tab`

When: `inlineEditIsVisible && tabShouldAcceptInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editor.hasSelection && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible`

---

###

ID: `editor.action.inlineSuggest.toggleShowCollapsed`

Precondition: `true`

---

###

ID: `editor.action.inlineSuggest.hide`

Precondition: `inlineEditIsVisible || inlineSuggestionVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

###

ID: `editor.action.inlineSuggest.jump`

Precondition: `inlineEditIsVisible`

Default Keybinding:

- Windows: `Tab`
- Linux: `Tab`
- macOS: `Tab`

When: `inlineEditIsVisible && tabShouldJumpToInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible`

---

###

ID: `editor.action.inlineSuggest.dev.extractRepro`

Precondition: `inlineEditIsVisible || inlineSuggestionVisible`

---

###

ID: `editor.action.marker.next`

Default Keybinding:

- Windows: `Alt+F8`
- Linux: `Alt+F8`
- macOS: `Alt+F8`

When: `editorFocus`

---

###

ID: `editor.action.marker.prev`

Default Keybinding:

- Windows: `Shift+Alt+F8`
- Linux: `Shift+Alt+F8`
- macOS: `Shift+Alt+F8`

When: `editorFocus`

---

###

ID: `editor.action.marker.nextInFiles`

Default Keybinding:

- Windows: `F8`
- Linux: `F8`
- macOS: `F8`

When: `editorFocus`

---

###

ID: `editor.action.marker.prevInFiles`

Default Keybinding:

- Windows: `Shift+F8`
- Linux: `Shift+F8`
- macOS: `Shift+F8`

When: `editorFocus`

---

###

ID: `editor.action.debugEditorGpuRenderer`

Precondition: `true`

---

###

ID: `editor.action.showHover`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+I`
- Linux: `Ctrl+K Ctrl+I`
- macOS: `Cmd+K Cmd+I`

When: `editorTextFocus`

---

###

ID: `editor.action.showDefinitionPreviewHover`

---

###

ID: `editor.action.hideHover`

---

###

ID: `editor.action.scrollUpHover`

Precondition: `editorHoverFocused`

Default Keybinding:

- Windows: `UpArrow`
- Linux: `UpArrow`
- macOS: `UpArrow`

When: `editorHoverFocused`

---

###

ID: `editor.action.scrollDownHover`

Precondition: `editorHoverFocused`

Default Keybinding:

- Windows: `DownArrow`
- Linux: `DownArrow`
- macOS: `DownArrow`

When: `editorHoverFocused`

---

###

ID: `editor.action.scrollLeftHover`

Precondition: `editorHoverFocused`

Default Keybinding:

- Windows: `LeftArrow`
- Linux: `LeftArrow`
- macOS: `LeftArrow`

When: `editorHoverFocused`

---

###

ID: `editor.action.scrollRightHover`

Precondition: `editorHoverFocused`

Default Keybinding:

- Windows: `RightArrow`
- Linux: `RightArrow`
- macOS: `RightArrow`

When: `editorHoverFocused`

---

###

ID: `editor.action.pageUpHover`

Precondition: `editorHoverFocused`

Default Keybinding:

- Windows: `PageUp`
- Linux: `PageUp`
- macOS: `PageUp`

Secondary Keybinding:

- Windows: `Alt+UpArrow`
- Linux: `Alt+UpArrow`
- macOS: `Alt+UpArrow`

When: `editorHoverFocused`

---

###

ID: `editor.action.pageDownHover`

Precondition: `editorHoverFocused`

Default Keybinding:

- Windows: `PageDown`
- Linux: `PageDown`
- macOS: `PageDown`

Secondary Keybinding:

- Windows: `Alt+DownArrow`
- Linux: `Alt+DownArrow`
- macOS: `Alt+DownArrow`

When: `editorHoverFocused`

---

###

ID: `editor.action.goToTopHover`

Precondition: `editorHoverFocused`

Default Keybinding:

- Windows: `Home`
- Linux: `Home`
- macOS: `Home`

Secondary Keybinding:

- Windows: `Ctrl+UpArrow`
- Linux: `Ctrl+UpArrow`
- macOS: `Cmd+UpArrow`

When: `editorHoverFocused`

---

###

ID: `editor.action.goToBottomHover`

Precondition: `editorHoverFocused`

Default Keybinding:

- Windows: `End`
- Linux: `End`
- macOS: `End`

Secondary Keybinding:

- Windows: `Ctrl+DownArrow`
- Linux: `Ctrl+DownArrow`
- macOS: `Cmd+DownArrow`

When: `editorHoverFocused`

---

###

ID: `editor.action.increaseHoverVerbosityLevel`

Precondition: `editorHoverVisible`

---

###

ID: `editor.action.decreaseHoverVerbosityLevel`

Precondition: `editorHoverVisible`

---

###

ID: `editor.action.indentationToSpaces`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.indentationToTabs`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.indentUsingTabs`

---

###

ID: `editor.action.indentUsingSpaces`

---

###

ID: `editor.action.changeTabDisplaySize`

---

###

ID: `editor.action.detectIndentation`

---

###

ID: `editor.action.reindentlines`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.reindentselectedlines`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.inPlaceReplace.up`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+Shift+,`
- Linux: `Ctrl+Shift+,`
- macOS: `Shift+Cmd+,`

When: `editorTextFocus`

---

###

ID: `editor.action.inPlaceReplace.down`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Ctrl+Shift+.`
- Linux: `Ctrl+Shift+.`
- macOS: `Shift+Cmd+.`

When: `editorTextFocus`

---

###

ID: `editor.action.insertFinalNewLine`

Precondition: `!editorReadonly`

---

###

ID: `expandLineSelection`

Default Keybinding:

- Windows: `Ctrl+L`
- Linux: `Ctrl+L`
- macOS: `Cmd+L`

When: `textInputFocus`

---

###

ID: `editor.action.linkedEditing`

Precondition: `editorHasRenameProvider && !editorReadonly`

Default Keybinding:

- Windows: `Ctrl+Shift+F2`
- Linux: `Ctrl+Shift+F2`
- macOS: `Shift+Cmd+F2`

When: `editorTextFocus`

---

###

ID: `editor.action.openLink`

---

###

ID: `editor.action.insertCursorAbove`

Default Keybinding:

- Windows: `Ctrl+Alt+UpArrow`
- Linux: `Shift+Alt+UpArrow`
- macOS: `Alt+Cmd+UpArrow`

When: `editorTextFocus`

---

###

ID: `editor.action.insertCursorBelow`

Default Keybinding:

- Windows: `Ctrl+Alt+DownArrow`
- Linux: `Shift+Alt+DownArrow`
- macOS: `Alt+Cmd+DownArrow`

When: `editorTextFocus`

---

###

ID: `editor.action.insertCursorAtEndOfEachLineSelected`

Default Keybinding:

- Windows: `Shift+Alt+I`
- Linux: `Shift+Alt+I`
- macOS: `Shift+Alt+I`

When: `editorTextFocus`

---

###

ID: `editor.action.addSelectionToNextFindMatch`

Default Keybinding:

- Windows: `Ctrl+D`
- Linux: `Ctrl+D`
- macOS: `Cmd+D`

When: `editorFocus`

---

###

ID: `editor.action.addSelectionToPreviousFindMatch`

---

###

ID: `editor.action.moveSelectionToNextFindMatch`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+D`
- Linux: `Ctrl+K Ctrl+D`
- macOS: `Cmd+K Cmd+D`

When: `editorFocus`

---

###

ID: `editor.action.moveSelectionToPreviousFindMatch`

---

###

ID: `editor.action.selectHighlights`

Default Keybinding:

- Windows: `Ctrl+Shift+L`
- Linux: `Ctrl+Shift+L`
- macOS: `Shift+Cmd+L`

When: `editorFocus`

---

###

ID: `editor.action.changeAll`

Precondition: `editorTextFocus && !editorReadonly`

Default Keybinding:

- Windows: `Ctrl+F2`
- Linux: `Ctrl+F2`
- macOS: `Cmd+F2`

When: `editorTextFocus`

---

###

ID: `editor.action.addCursorsToBottom`

---

###

ID: `editor.action.addCursorsToTop`

---

###

ID: `editor.action.focusNextCursor`

---

###

ID: `editor.action.focusPreviousCursor`

---

###

ID: `editor.action.triggerParameterHints`

Precondition: `editorHasSignatureHelpProvider`

Default Keybinding:

- Windows: `Ctrl+Shift+Space`
- Linux: `Ctrl+Shift+Space`
- macOS: `Shift+Cmd+Space`

When: `editorTextFocus`

---

###

ID: `editor.action.rename`

Precondition: `editorHasRenameProvider && !editorReadonly`

Default Keybinding:

- Windows: `F2`
- Linux: `F2`
- macOS: `F2`

When: `editorTextFocus`

---

###

ID: `editor.action.smartSelect.expand`

Default Keybinding:

- Windows: `Shift+Alt+RightArrow`
- Linux: `Shift+Alt+RightArrow`
- macOS: `Ctrl+Shift+Cmd+RightArrow`

When: `editorTextFocus`

---

###

ID: `editor.action.smartSelect.shrink`

Default Keybinding:

- Windows: `Shift+Alt+LeftArrow`
- Linux: `Shift+Alt+LeftArrow`
- macOS: `Ctrl+Shift+Cmd+LeftArrow`

When: `editorTextFocus`

---

###

ID: `editor.action.forceRetokenize`

---

###

ID: `editor.action.wordHighlight.next`

Precondition: `hasWordHighlights`

Default Keybinding:

- Windows: `F7`
- Linux: `F7`
- macOS: `F7`

When: `editorTextFocus`

---

###

ID: `editor.action.wordHighlight.prev`

Precondition: `hasWordHighlights`

Default Keybinding:

- Windows: `Shift+F7`
- Linux: `Shift+F7`
- macOS: `Shift+F7`

When: `editorTextFocus`

---

###

ID: `editor.action.wordHighlight.trigger`

When: `editorTextFocus`

---

###

ID: `deleteInsideWord`

Precondition: `!editorReadonly`

---

###

ID: `editor.action.toggleWordWrap`

Default Keybinding:

- Windows: `Alt+Z`
- Linux: `Alt+Z`
- macOS: `Alt+Z`

---

###

ID: `editor.action.inspectTMScopes`

---

###

ID: `notebook.formatCell`

Precondition: `editorHasDocumentFormattingProvider && inCompositeEditor && notebookEditable && !editorReadonly && activeEditor == 'workbench.editor.notebook'`

Default Keybinding:

- Windows: `Shift+Alt+F`
- Linux: `Ctrl+Shift+I`
- macOS: `Shift+Alt+F`

When: `editorTextFocus`

---

###

ID: `editor.action.formatDocument.multiple`

Precondition: `editorHasMultipleDocumentFormattingProvider && !editorReadonly`

---

###

ID: `editor.action.formatSelection.multiple`

Precondition: `editorHasMultipleDocumentSelectionFormattingProvider && !editorReadonly`

---

###

ID: `repl.action.acceptInput`

Precondition: `inDebugRepl`

Default Keybinding:

- Windows: `Enter`
- Linux: `Enter`
- macOS: `Enter`

When: `textInputFocus`

---

###

ID: `repl.action.copyAll`

Precondition: `inDebugRepl`

---

###

ID: `editor.action.dirtydiff.previous`

Precondition: `!textCompareEditorActive`

Default Keybinding:

- Windows: `Shift+Alt+F3`
- Linux: `Shift+Alt+F3`
- macOS: `Shift+Alt+F3`

When: `editorTextFocus`

---

###

ID: `editor.action.dirtydiff.next`

Precondition: `!textCompareEditorActive`

Default Keybinding:

- Windows: `Alt+F3`
- Linux: `Alt+F3`
- macOS: `Alt+F3`

When: `editorTextFocus`

---

###

ID: `workbench.action.editor.previousChange`

Precondition: `!textCompareEditorActive && quickDiffDecorationCount != '0'`

Default Keybinding:

- Windows: `Shift+Alt+F5`
- Linux: `Shift+Alt+F5`
- macOS: `Shift+Alt+F5`

When: `editorTextFocus`

---

###

ID: `workbench.action.editor.nextChange`

Precondition: `!textCompareEditorActive && quickDiffDecorationCount != '0'`

Default Keybinding:

- Windows: `Alt+F5`
- Linux: `Alt+F5`
- macOS: `Alt+F5`

When: `editorTextFocus`

---

###

ID: `editor.debug.action.conditionalBreakpoint`

Precondition: `debuggersAvailable`

---

###

ID: `editor.debug.action.addLogPoint`

Precondition: `debuggersAvailable`

---

###

ID: `editor.debug.action.triggerByBreakpoint`

Precondition: `debuggersAvailable`

---

###

ID: `editor.debug.action.editBreakpoint`

Precondition: `debuggersAvailable`

---

###

ID: `editor.debug.action.runToCursor`

Precondition: `debuggersAvailable && disassemblyViewFocus && !inChat && !panelFocus || debuggersAvailable && editorTextFocus && !inChat && !panelFocus`

---

###

ID: `editor.debug.action.stepIntoTargets`

Precondition: `editorTextFocus && inDebugMode && stepIntoTargetsSupported && debugState == 'stopped'`

---

###

ID: `editor.debug.action.selectionToRepl`

Precondition: `editorTextFocus && inDebugMode && !inChat`

---

###

ID: `editor.debug.action.selectionToWatch`

Precondition: `editorTextFocus && inDebugMode && !inChat`

---

###

ID: `editor.debug.action.showDebugHover`

Precondition: `inDebugMode`

Default Keybinding:

- Windows: `Ctrl+K Ctrl+I`
- Linux: `Ctrl+K Ctrl+I`
- macOS: `Cmd+K Cmd+I`

When: `editorTextFocus`

---

###

ID: `editor.debug.action.goToNextBreakpoint`

Precondition: `debuggersAvailable`

---

###

ID: `editor.debug.action.goToPreviousBreakpoint`

Precondition: `debuggersAvailable`

---

###

ID: `editor.debug.action.closeExceptionWidget`

Precondition: `exceptionWidgetVisible`

Default Keybinding:

- Windows: `Escape`
- Linux: `Escape`
- macOS: `Escape`

---

###

ID: `editor.emmet.action.expandAbbreviation`

Precondition: `!editorReadonly`

Default Keybinding:

- Windows: `Tab`
- Linux: `Tab`
- macOS: `Tab`

When: `config.emmet.triggerExpansionOnTab && editorTextFocus && !editorTabMovesFocus`

---

###

ID: `editor.action.formatChanges`

Precondition: `editorHasDocumentSelectionFormattingProvider && !editorReadonly`

---

###

ID: `editor.action.formatDocument.none`

Precondition: `!editorHasDocumentFormattingProvider && !editorReadonly`

Default Keybinding:

- Windows: `Shift+Alt+F`
- Linux: `Ctrl+Shift+I`
- macOS: `Shift+Alt+F`

When: `editorTextFocus`

---

###

ID: `editor.action.selectionClipboardPaste`

Precondition: `!editorReadonly`
