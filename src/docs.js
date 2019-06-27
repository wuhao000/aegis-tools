"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const resolveProps = require('./props').resolveProps;
const fs_1 = tslib_1.__importDefault(require("fs"));
const componentList = require('./components');
const basePath = 'src/packages';
const renderTemplate = require('./tmpl').render;
console.log('生成文档中……');
function createDemoFile(component, componentDemoRootPath, demoName, vueContent) {
    const name = demoName.substring(0, 1).toUpperCase() + demoName.substring(1);
    const content = renderTemplate('src/templates/demo-index.vue.tmpl', {
        name, demoName, dir: component.dir
    });
    const componentGeneratedFilePath = 'src/generated/' + component.dir;
    if (!fs_1.default.existsSync(componentGeneratedFilePath)) {
        fs_1.default.mkdirSync(componentGeneratedFilePath);
    }
    fs_1.default.writeFileSync(`${componentGeneratedFilePath}/${demoName}.txt`, vueContent);
    fs_1.default.writeFileSync(`${componentGeneratedFilePath}/${demoName}.vue`, content);
}
const titleMap = {
    props: '属性说明',
    events: '事件说明',
    functions: '方法说明',
    slots: '插槽说明'
};
function createDemoTemplate(demos, options) {
    const demoComponents = demos.map(it => it.name).map(it => `    <${it} id="${it}"/>`).join('\n');
    const mdComponents = ['props', 'events', 'functions', 'slots'].map(it => {
        if (options[it]) {
            return `<div class="markdown-body" id="${it}">
      <span></span>
      <h2>${titleMap[it]}</h2>
    </div>
    <markdown :source="${it}"/>`;
        }
        else {
            return '';
        }
    }).filter(it => it.length > 0).join('\n\t\t');
    const title = options.title ? '<markdown :source="title"/>' : '';
    return renderTemplate('src/templates/demo.vue.tmpl', {
        title,
        demoComponents,
        mdComponents,
        anchors: demos.map(it => {
            return `        <d-anchor-link href="#${it.name}"
                       title="${it.title}"/>`;
        }).join('\n'),
        propsExists: options['props'] || false,
        eventsExists: options['events'] || false,
        functionsExists: options['functions'] || false,
        slotsExists: options['slots'] || false
    });
}
function createDemoIndex(component, componentDemoRootPath, demos) {
    const demoImports = demos.map(it => it.name).map(it => `  import ${it} from './${it}.vue';`)
        .join('\n');
    const options = {
        title: fs_1.default.existsSync(componentDemoRootPath + '/README.md'),
        props: fs_1.default.existsSync(componentDemoRootPath + '/props.md'),
        events: fs_1.default.existsSync(componentDemoRootPath + '/events.md'),
        functions: fs_1.default.existsSync(componentDemoRootPath + '/functions.md'),
        slots: fs_1.default.existsSync(componentDemoRootPath + '/slots.md')
    };
    const mdImports = Object.keys(options)
        .map(it => options[it] ? `import ${it} from '../../packages/${component.dir}/demo/${it === 'title' ? 'README' : it}.md';` : '')
        .filter(it => it.length > 0)
        .join('\n  ');
    const mdProps = Object.keys(options)
        .map(it => options[it] ? `public ${it} = ${it};` : '')
        .filter(it => it.length > 0)
        .join('\n    ');
    function generateDecorator(demos) {
        if (demos.length) {
            return `@Component({
    name: 'ComponentDemo',
    components: {
      ${demos.map(it => it.name).join(', ')}
    }
  })`;
        }
        else {
            return `@Component({
    name: 'ComponentDemo'
  })`;
        }
    }
    const content = `${createDemoTemplate(demos, options)}
<script lang="ts">
${demoImports}
  import Anchor from '@/packages/d-anchor';
  import Vue from 'vue';
  import Component from 'vue-class-component';
${component.type !== 'tool' ? `  import ${component.upperCase} from '@/packages/${component.dir}';` : ''}
  ${mdImports}

  Vue.use(Anchor);
${component.type !== 'tool' ? `  Vue.use(${component.upperCase});` : ''}
  ${generateDecorator(demos)}
  export default class ComponentDemo extends Vue {
${mdProps ? `    ${mdProps}` : ''}

    public getContainer() {
      return document.getElementById('app-content');
    }
  }
</script>
<style lang="less" scoped>
  .toc-affix {
    width: 150px;
    position: fixed;
    top: 100px;
    right: 10px;
    bottom: 250px;
    z-index: 500;
  }
</style>
`;
    const dir = 'src/generated/' + component.dir;
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir);
    }
    fs_1.default.writeFileSync('src/generated/' + component.dir + '/index.vue', content);
}
function resolveDemo(component) {
    resolveProps(component);
    const componentDemoRootPath = `${basePath}/${component.dir}/demo`;
    if (fs_1.default.existsSync(componentDemoRootPath)) {
        const paths = fs_1.default.readdirSync(componentDemoRootPath);
        const demoDirs = paths.filter(it => !it.includes('.'));
        const demos = [];
        const demoNames = [];
        demoDirs.forEach(demoName => {
            const demoDir = `${componentDemoRootPath}/${demoName}`;
            const vuePath = demoDir + '/index.vue';
            const hasVueFile = fs_1.default.existsSync(vuePath);
            const markdownPath = demoDir + '/index.md';
            const hasMarkdownFile = fs_1.default.existsSync(markdownPath);
            if (hasVueFile && hasMarkdownFile) {
                const vueContent = fs_1.default.readFileSync(demoDir + '/index.vue').toString();
                createDemoFile(component, componentDemoRootPath, demoName, vueContent);
                const markdownContent = fs_1.default.readFileSync(markdownPath).toString();
                const firstLine = markdownContent.split('\n')[0];
                demos.push({
                    name: demoName,
                    title: firstLine ? (firstLine.startsWith('####') ? firstLine.substring(4).trim() : firstLine.trim()) : '',
                    markdownFileContent: markdownContent,
                    vueFileContent: fs_1.default.readFileSync(vuePath).toString()
                });
                demoNames.push(demoName);
            }
        });
        createDemoIndex(component, componentDemoRootPath, demos);
    }
}
componentList.forEach(component => {
    resolveDemo(component);
});
generateMainFile();
/**
 * 生成入口文件src/packages/index.ts
 */
function generateMainFile() {
    const componentList = require('./components');
    const res = renderTemplate('src/templates/index.ts.tmpl', {
        imports: componentList.map(it => {
            return `import ${it.upperCase} from './${it.dir}';`;
        }).join('\n'),
        vueComponents: componentList.filter(it => it.type !== 'tool').map(it => it.upperCase).join(',\n\t'),
        components: componentList.map(it => it.upperCase).join(',\n\t')
    });
    fs_1.default.writeFileSync('src/packages/index.ts', res);
}
exports.default = generateMainFile;
require('./router');
console.log('生成文档完成');
