---
title: Layout 布局
---
# Layout 布局

**使用方法**

### 布局一

#### 预览

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 示例代码

```vue
<x-layout style="color: white; margin-bottom:50px;">
    <x-header style="height: 50px; background:#9E91F2;">
      header
    </x-header>
    <g-content style="height: 100px; background:#7B62D9;">
      content
    </g-content>
    <x-footer style="height: 50px; background:#9E91F2;">
      footer
    </x-footer>
</x-layout>
```

### 布局二

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 示例代码

```vue
<x-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <x-header style="height: 50px; background:#9E91F2;">
      header
    </x-header>
    <x-layout>
      <x-sider style="height: 100px; background:#ddd; width:200px; color: black;">
        sider
      </x-sider>
      <g-content style="height: 100px; background:#7B62D9;">
        content
      </g-content>
    </x-layout>
    <x-footer style="height: 50px; background:#9E91F2;">
      footer
    </x-footer>
</x-layout>
```

### 布局三

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 示例代码

```vue
<x-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <x-sider style=" background:#ddd; width:200px; color: black;">
      sider
    </x-sider>
    <x-layout>
      <x-header style="height: 50px; background:lightskyblue;">
        header
      </x-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <x-footer style="height: 50px; background:lightskyblue;">
        footer
      </x-footer>
    </x-layout>
</x-layout>
```