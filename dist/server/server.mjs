import { renderToString } from '@vue/server-renderer';
import { setup } from '@css-render/vue3-ssr';
import { c as createApp } from './chunks/chunk-1c9c06f6.js';
import 'vue';
import 'pinia';
import '@vueuse/head';
import 'lodash';
import './entries/src_pages_Home-page.mjs';
import 'naive-ui';
import 'vue/server-renderer';
import '@vicons/tabler';
import './chunks/chunk-8109fd17.js';
import './chunks/chunk-6003391e.js';
import '@vueuse/core';
import 'date-fns';
import 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js';
import '@vicons/material';
import 'figue';
import 'vue-router';
import './entries/src_ui_demo_demo-home-page.mjs';
import './chunks/chunk-28375bc9.js';
import './chunks/chunk-95ec8cf7.js';
import './chunks/chunk-000e277f.js';
import './chunks/chunk-bb5bb4f6.js';
import './chunks/chunk-83cdd9a0.js';
import './chunks/chunk-4e7a6a8d.js';
import './chunks/chunk-11f44f81.js';
import './chunks/chunk-35c3d701.js';
import 'marked';
import 'dompurify';
import './chunks/chunk-6ba26b76.js';
import './chunks/chunk-77c5cc16.js';
import './chunks/chunk-89a4876c.js';
import './chunks/chunk-2ce6ed5e.js';
import 'fuse.js';
import './chunks/chunk-aab02bfe.js';
import './chunks/chunk-aff50618.js';
import './chunks/chunk-8daff870.js';
import './entries/src_pages_404-page.mjs';

async function render() {
  const { app, router, pinia, i18n } = createApp();
  const { collect } = setup(app);
  const appHtml = await renderToString(app);
  const cssHtml = collect();
  return {
    cssHtml,
    appHtml,
    app,
    router,
    pinia,
    i18n
  };
}

export { render };
