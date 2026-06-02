<!DOCTYPE html><html class="light" lang="zh-CN" style="width: 1280px; height: 1567px; overflow: hidden; position: relative;"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>身份信息生成器 | ID Gen Pro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&amp;family=Hanken+Grotesk:wght@600;700&amp;family=JetBrains+Mono:wght@500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-container": "#5b6765",
                        "outline-variant": "#bcc9c6",
                        "on-error-container": "#93000a",
                        "on-surface-variant": "#3d4947",
                        "primary-container": "#008378",
                        "primary-fixed": "#89f5e7",
                        "on-primary-fixed-variant": "#005049",
                        "tertiary": "#555c6e",
                        "background": "#f9f9ff",
                        "on-primary": "#ffffff",
                        "secondary-fixed-dim": "#bcc9c6",
                        "on-secondary-fixed": "#121e1c",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#6bd8cb",
                        "surface": "#f9f9ff",
                        "outline": "#6d7a77",
                        "primary": "#00685f",
                        "on-tertiary-fixed-variant": "#404758",
                        "error-container": "#ffdad6",
                        "inverse-on-surface": "#ebf1ff",
                        "on-primary-container": "#f4fffc",
                        "on-surface": "#151c27",
                        "surface-container": "#e7eefe",
                        "surface-tint": "#006a61",
                        "on-secondary": "#ffffff",
                        "secondary": "#55615f",
                        "surface-container-low": "#f0f3ff",
                        "on-background": "#151c27",
                        "tertiary-fixed": "#dce2f7",
                        "secondary-fixed": "#d8e5e2",
                        "secondary-container": "#d8e5e2",
                        "on-error": "#ffffff",
                        "primary-fixed-dim": "#6bd8cb",
                        "on-primary-fixed": "#00201d",
                        "surface-variant": "#dce2f3",
                        "surface-dim": "#d3daea",
                        "surface-bright": "#f9f9ff",
                        "surface-container-high": "#e2e8f8",
                        "on-tertiary-fixed": "#141b2b",
                        "tertiary-container": "#6e7487",
                        "error": "#ba1a1a",
                        "tertiary-fixed-dim": "#c0c6db",
                        "inverse-surface": "#2a313d",
                        "on-tertiary-container": "#fefcff",
                        "surface-container-highest": "#dce2f3",
                        "on-secondary-fixed-variant": "#3d4947",
                        "surface-container-lowest": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-mobile": "16px",
                        "gutter": "24px",
                        "margin-desktop": "48px",
                        "base": "4px",
                        "container-max": "1120px"
                    },
                    "fontFamily": {
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "headline-lg-mobile": ["Hanken Grotesk"],
                        "headline-sm": ["Hanken Grotesk"],
                        "mono-data": ["JetBrains Mono"],
                        "headline-lg": ["Hanken Grotesk"],
                        "headline-md": ["Hanken Grotesk"],
                        "label-md": ["Inter"]
                    },
                    "fontSize": {
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                        "headline-sm": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "mono-data": ["15px", {"lineHeight": "24px", "fontWeight": "500"}],
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .copy-toast {
            animation: slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideInUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md overflow-x-hidden">
<!-- TopNavBar -->

<main class="pt-32 pb-20 px-margin-mobile md:px-0">
<div class="max-w-container-max mx-auto">
<!-- Header Title -->
<div class="mb-8 text-center md:text-left">
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-2">身份信息生成器</h1>
<p class="text-on-surface-variant font-body-lg text-body-lg">Precision data generation for professional development environments.</p>
</div>
<!-- Main Interactive Card -->
<div class="bg-surface-container-lowest rounded-xl shadow-[0px_10px_25px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-outline-variant/30">
<!-- Left Column: Input -->
<div class="w-full md:w-5/12 p-8 md:p-10 bg-white">
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: &quot;FILL&quot; 1;">tune</span>
<h2 class="font-headline-sm text-headline-sm">生成配置</h2>
<button type="reset" class="ml-auto flex items-center gap-1 px-3 py-1.5 border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all active:scale-95"><span class="material-symbols-outlined text-[18px]">refresh</span>刷新&nbsp;</button></div>
<form class="space-y-6">
<!-- Location Selection -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant">生成地区 (省/市/区)</label>
<div class="grid grid-cols-3 gap-2">
<select class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
<option>广东省</option>
<option>北京市</option>
<option>上海市</option>
</select>
<select class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
<option>深圳市</option>
<option>广州市</option>
</select>
<select class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
<option>南山区</option>
<option>福田区</option>
<option>宝安区</option>
</select>
</div>
</div>
<!-- Date Selection -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant">出生日期 (年/月/日)</label>
<div class="grid grid-cols-3 gap-2">
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" placeholder="1990" type="number">
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" placeholder="01" type="number">
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" placeholder="01" type="number">
</div>
</div>
<!-- Gender & Provider -->
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant">性别</label>
<div class="flex gap-4 items-center h-10">
<label class="flex items-center gap-2 cursor-pointer group">
<input checked="" class="w-4 h-4 text-primary focus:ring-primary/20 border-outline-variant" name="gender" type="radio">
<span class="text-body-md group-hover:text-primary transition-colors">男</span>
</label>
<label class="flex items-center gap-2 cursor-pointer group">
<input class="w-4 h-4 text-primary focus:ring-primary/20 border-outline-variant" name="gender" type="radio">
<span class="text-body-md group-hover:text-primary transition-colors">女</span>
</label>
</div>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant">运营商</label>
<select class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none">
<option>中国移动</option>
<option>中国联通</option>
<option>中国电信</option>
</select>
</div>
</div>
<!-- Quantity Stepper -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant">生成数量</label>
<div class="flex items-center border border-outline-variant rounded-lg bg-surface-container-low w-32 overflow-hidden">
<button class="px-3 py-2 hover:bg-outline-variant/20 transition-colors text-on-surface-variant" onclick="this.nextElementSibling.stepDown()" type="button">
<span class="material-symbols-outlined text-[18px]">remove</span>
</button>
<input class="w-full text-center bg-transparent border-none focus:ring-0 text-body-md font-bold" max="10" min="1" type="number" value="1">
<button class="px-3 py-2 hover:bg-outline-variant/20 transition-colors text-on-surface-variant" onclick="this.previousElementSibling.stepUp()" type="button">
<span class="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
<button class="w-full bg-primary text-on-primary py-3 rounded-lg font-headline-sm text-headline-sm hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20" type="submit">
<span class="material-symbols-outlined">bolt</span>
                            提交生成
                        </button>
</form>
</div>
<!-- Subtle Divider -->
<div class="hidden md:block w-px bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent"></div>
<!-- Right Column: Output -->
<div class="w-full md:w-7/12 p-8 md:p-10 bg-surface-container-low/30 relative">
<div class="flex items-center justify-between mb-8">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: &quot;FILL&quot; 1;">assignment_turned_in</span>
<h2 class="font-headline-sm text-headline-sm">生成结果</h2>
</div>
<button class="text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 font-label-md text-label-md">
<span class="material-symbols-outlined text-[18px]">refresh</span>
                            重新生成
                        </button>
</div>
<div class="bg-white rounded-xl border border-outline-variant/40 p-6 space-y-4">
<!-- Result List -->
<div class="grid grid-cols-1 gap-4">
<div class="flex justify-between items-center py-2 border-b border-surface-variant">
<span class="text-on-surface-variant font-label-md">姓名</span>
<span class="font-bold text-on-surface">张伟杰</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-surface-variant">
<span class="text-on-surface-variant font-label-md">家庭住址</span>
<span class="text-on-surface text-right max-w-[200px]">广东省深圳市南山区深南大道9988号</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-surface-variant">
<span class="text-on-surface-variant font-label-md">出生日期</span>
<span class="font-bold text-on-surface">1992年05月14日</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-surface-variant">
<span class="text-on-surface-variant font-label-md">性别 / 年龄</span>
<span class="text-on-surface">男 / 32岁</span>
</div>
<div class="group flex justify-between items-center py-3 bg-surface-container-lowest px-4 rounded-lg border border-transparent hover:border-primary/30 transition-all">
<div class="flex flex-col">
<span class="text-on-surface-variant text-[12px] font-label-md mb-1">身份证号</span>
<span class="font-mono-data text-mono-data text-primary tracking-wider">44030119920514001X</span>
</div>
<button class="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all active:scale-90" onclick="copyToClipboard('44030119920514001X', '身份证号')">
<span class="material-symbols-outlined">content_copy</span>
</button>
</div>
<div class="group flex justify-between items-center py-3 bg-surface-container-lowest px-4 rounded-lg border border-transparent hover:border-primary/30 transition-all">
<div class="flex flex-col">
<span class="text-on-surface-variant text-[12px] font-label-md mb-1">手机号码</span>
<span class="font-mono-data text-mono-data text-primary tracking-wider">138 0013 8000</span>
</div>
<button class="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all active:scale-90" onclick="copyToClipboard('13800138000', '手机号码')">
<span class="material-symbols-outlined">content_copy</span>
</button>
</div>
</div>
</div>
<div class="mt-8 flex gap-4">
<button class="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary/5 active:scale-[0.98] transition-all">
<span class="material-symbols-outlined">download</span>
                            导出 Excel
                        </button>
<button class="flex-1 flex items-center justify-center gap-2 bg-on-surface text-surface py-3 rounded-lg hover:bg-on-surface-variant active:scale-[0.98] transition-all">
<span class="material-symbols-outlined">history</span>
                            查看历史
                        </button>
</div>
<!-- Visual Context Image Placeholder -->
<div class="mt-10 rounded-xl overflow-hidden grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
<img alt="Preview of ID Generation System" class="w-full h-32 object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3CaXG0tdLfatiQDU3eqVgHYpokjRhm4gTds0a-WfG5QpoUQhQ8ZD0Gtgl7yGMZF8nRt4ptiZ7c_Ud9qoERUxo5unsObFRUXlc0aaAOrfjmsXuONylrqDJfqCm0ywOUq84LVmIqBs3Bb-QgFuMEvUElbQXNwdJC0zK2Fr4sfdsOP418_sDqTfF8cNSLZqT11v6VdABS-4QfTG1MLkse3odETd1JQAGq-cwqwznUSJmPmJLbCFFBszchGykZkH_LtP_8176Z4Uw2Gjr">
</div>
</div>
</div>
<!-- Features Section (Bento Inspired) -->

</div>
</main>
<!-- Footer -->
<footer class="w-full bg-surface-container-low border-t border-outline-variant py-8">
<div class="w-full max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter">
<div class="flex flex-col items-center md:items-start gap-2">
<span class="font-headline-sm text-headline-sm text-secondary">ID Gen Pro</span>
<p class="font-label-md text-label-md text-on-surface-variant"><span style="color: rgb(120, 144, 156); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, sans-serif; font-size: 13px; letter-spacing: normal; text-align: center;">© 2026 litao - 仅供学习和测试使用</span></p>
</div>
<div class="flex gap-6">



</div>
</div>
</footer>
<!-- Feedback Toast -->
<div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none flex flex-col gap-2" id="toast-container"></div>
<script>
        function copyToClipboard(text, label) {
            navigator.clipboard.writeText(text).then(() => {
                showToast(label + '已复制到剪贴板');
            });
        }

        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'copy-toast bg-primary text-on-primary px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-label-md text-label-md';
            toast.innerHTML = `
                <span class="material-symbols-outlined text-[18px]">check_circle</span>
                <span>${message}</span>
            `;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
                setTimeout(() => toast.remove(), 500);
            }, 2500);
        }

        // Prevent form submission refresh
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('数据已刷新');
        });
    </script>


</body></html>