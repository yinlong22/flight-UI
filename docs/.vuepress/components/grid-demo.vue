<template>
    <div>
        <h3>24网格</h3>
        <hr>
        <f-row align="center">
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8">
                <div>8</div>
            </f-col>
        </f-row>

        <f-row align="center">
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
        </f-row>

        <f-row align="center">
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
        </f-row>

        <f-row align="center">
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
        </f-row>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
        <br>
        <h3>设置 gutter</h3>
        <hr>
        <h4>预览</h4>
        <f-row gutter="10" align="center">
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8">
                <div>8</div>
            </f-col>
        </f-row>

        <f-row gutter="10" align="center">
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
        </f-row>
        <h4>代码</h4>
        <pre><code>{{content1}}</code></pre>
        <br>
        <h3>设置 空隙</h3>
        <hr>
        <h4>预览</h4>
        <f-row gutter="10" align="center">
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8" offset="8">
                <div>8</div>
            </f-col>
        </f-row>
        <f-row gutter="10" align="center">
            <f-col span="6" offset="6">
                <div>6</div>
            </f-col>
            <f-col span="6" offset="6">
                <div>6</div>
            </f-col>
        </f-row>
        <f-row gutter="10" align="center">
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4" offset="4">
                <div>4</div>
            </f-col>
            <f-col span="4" offset="8">
                <div>4</div>
            </f-col>
        </f-row>
        <f-row gutter="10" align="center">
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2" offset="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2" offset="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2" offset="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2" offset="2">
                <div>2</div>
            </f-col>
        </f-row>
        <h4>代码</h4>
        <pre><code>{{content2}}</code></pre>
    </div>
</template>
<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'

    export default {
        components: {
            'f-row': Row,
            'f-col': Col,
        },
        data() {
            return {
                content: `
        * {
        box-sizing: border-box;
         }
        <f-row align="center">
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8">
                <div>8</div>
            </f-col>
        </f-row>
        <f-row align="center">
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
        </f-row>
        <f-row align="center">
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4">
                <div>4</div>
            </f-col>
        </f-row>
        <f-row align="center">
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
        </f-row>
      `.replace(/\s{2,}/, '').trim(),
                content1: `
         <f-row align="center" gutter="10">
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8">
                <div>8</div>
            </f-col>
        </f-row>
        <f-row align="center" gutter="10">
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
            <f-col span="6">
                <div>6</div>
            </f-col>
        </f-row>`.replace(/\s{2,}/, '').trim(),
                content2:`
                <f-row gutter="10" align="center">
            <f-col span="8">
                <div>8</div>
            </f-col>
            <f-col span="8" offset="8">
                <div>8</div>
            </f-col>
        </f-row>
        <f-row gutter="10" align="center">
            <f-col span="6" offset="6">
                <div>6</div>
            </f-col>
            <f-col span="6" offset="6">
                <div>6</div>
            </f-col>
        </f-row>
        <f-row gutter="10" align="center">
            <f-col span="4">
                <div>4</div>
            </f-col>
            <f-col span="4" offset="4">
                <div>4</div>
            </f-col>
            <f-col span="4" offset="8">
                <div>4</div>
            </f-col>
        </f-row>
        <f-row gutter="10" align="center">
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2" offset="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2" offset="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2" offset="2">
                <div>2</div>
            </f-col>
            <f-col span="2">
                <div>2</div>
            </f-col>
            <f-col span="2" offset="2">
                <div>2</div>
            </f-col>
        </f-row>
                `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>
<style>
    * {
        box-sizing: border-box;
    }
</style>