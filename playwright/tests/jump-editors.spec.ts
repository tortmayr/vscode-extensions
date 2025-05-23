import { ProcessEditor } from './page-objects/process-editor';
import { FormEditor } from './page-objects/form-editor';
import { test } from './fixtures/baseTest';

test('Jump between editors', async ({ page }) => {
  const processEditor = new ProcessEditor(page, 'testFormProcess.p.json');
  const formEditor = new FormEditor(page, 'testForm.f.json');
  await processEditor.hasDeployProjectStatusMessage();
  await processEditor.openEditorFile();
  await processEditor.isViewVisible();
  await processEditor.toolbar.locator('.tool-bar-button[title*="Open Form"]').click();
  await formEditor.isViewVisible();
  await formEditor.toolbar.getByRole('button', { name: 'Open Process' }).click();
  await processEditor.isViewVisible();
});
