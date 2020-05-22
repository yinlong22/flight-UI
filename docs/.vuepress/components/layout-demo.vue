<template>
    <div>
        <f-layout style="color: white; margin-bottom:50px;">
            <f-header style="height: 50px; background:lightskyblue;">
                header
            </f-header>
            <f-content style="height: 100px; background:deepskyblue;">
                content
            </f-content>
            <f-footer style="height: 50px; background:lightskyblue;">
                footer
            </f-footer>
        </f-layout>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
        <br>
        <h3>内部分栏布局</h3>
        <hr>
        <h4>预览</h4>
        <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <f-header style="height: 50px; background:lightskyblue;">
                header
            </f-header>
            <f-layout>
                <f-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                    sider
                </f-sider>
                <f-content style="height: 100px; background:deepskyblue;">
                    content
                </f-content>
            </f-layout>
            <f-footer style="height: 50px; background:lightskyblue;">
                footer
            </f-footer>
        </f-layout>
        <h4>代码</h4>
        <pre><code>{{content1}}</code></pre>
        <br>
        <h3>左右分栏布局</h3>
        <hr>
        <h4>预览</h4>
        <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <f-sider style=" background:#ddd; width:200px; color: black;">
                sider
            </f-sider>
            <f-layout>
                <f-header style="height: 50px; background:lightskyblue;">
                    header
                </f-header>
                <f-content style="height: 100px; background:deepskyblue;">
                    content
                </f-content>
                <f-footer style="height: 50px; background:lightskyblue;">
                    footer
                </f-footer>
            </f-layout>
        </f-layout>
        <h4>代码</h4>
        <pre><code>{{content2}}</code></pre>
    </div>
</template>
<script>
    import Layout from '../../../src/layout'
    import Content from '../../../src/content'
    import Header from '../../../src/header'
    import Sider from '../../../src/sider'
    import Footer from '../../../src/footer'

    export default {
        components: {
            'f-layout': Layout,
            'f-header': Header,
            'f-sider': Sider,
            'f-content': Content,
            'f-footer': Footer,
        },
        data() {
            return {
                content: `
         <f-layout style="color: white; margin-bottom:50px;">
            <f-header style="height: 50px; background:lightskyblue;">
                header
            </f-header>
            <f-content style="height: 100px; background:deepskyblue;">
                content
            </f-content>
            <f-footer style="height: 50px; background:lightskyblue;">
                footer
            </f-footer>
        </f-layout>
      `.replace(/\s{2,}/, '').trim(),
                content1: `
                <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <f-header style="height: 50px; background:lightskyblue;">
                header
            </f-header>
            <f-layout>
                <f-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                    sider
                </f-sider>
                <f-content style="height: 100px; background:deepskyblue;">
                    content
                </f-content>
            </f-layout>
            <f-footer style="height: 50px; background:lightskyblue;">
                footer
            </f-footer>
        </f-layout>
                `.replace(/\s{2,}/, '').trim(),
                content2: `
                <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <f-sider style=" background:#ddd; width:200px; color: black;">
                sider
            </f-sider>
            <f-layout>
                <f-header style="height: 50px; background:lightskyblue;">
                    header
                </f-header>
                <f-content style="height: 100px; background:deepskyblue;">
                    content
                </f-content>
                <f-footer style="height: 50px; background:lightskyblue;">
                    footer
                </f-footer>
            </f-layout>
        </f-layout>
                `
            }
        },
    }
</script>
