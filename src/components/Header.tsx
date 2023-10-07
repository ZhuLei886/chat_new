import logo from "/assets/logo.svg?raw"
import ThemeToggle from "./ThemeToggle"
import { RootStore, loadSession } from "~/store"
import { Show, createMemo } from "solid-js"
import { useNavigate } from "solid-start"

function splitEmoji(text: string) {
  const [icon, title] = text
    .split(
      /^([\u{1F300}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}])\s*(.+)$/u
    )
    .filter(Boolean)
  if (title)
    return {
      icon,
      title
    }
  return {
    icon: undefined,
    title: icon
  }
}

function scrollTo(selector: string, yOffset = 0) {
  const el = document.querySelector(selector) as HTMLElement
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: "smooth" })
}
function aa(selector: string, yOffset = 0) {
  var btn = document.getElementById("bbuu");
    var zsm = document.getElementById("zsm");
    var span = btn.getElementsByTagName("span")[0];
    if(zsm.style.height=="auto"){
      zsm.style.height="40px";
      span.textContent = "+";
    }else{
      zsm.style.height="auto";
      span.textContent = "-";
    }
}

export default function Header() {
  const { store } = RootStore
  const navigate = useNavigate()
  const iconTitle = createMemo(() => splitEmoji(store.sessionSettings.title))

  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?14155aee830233f513b1f078a6a1ce2a";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

  // var btn = document.getElementById("bbuu");
  // btn.onclick = function(){
  //   var zsm = document.getElementById("zsm");
  //   var span = btn.getElementsByTagName("span")[0];
  //   if(zsm.style.height=="auto"){
  //     zsm.style.height="40px";
  //     span.textContent = "+";
  //   }else{
  //     zsm.style.height="auto";
  //     span.textContent = "-";
  //   }
  // }

  return (
    <>
      <div
        id="logo"
        class="pl-1em cursor-pointer inline-block"
        onClick={() => {
          navigate("/", { replace: true })
          loadSession("index")
        }}
      >
        <Show
          when={iconTitle().icon}
          fallback={<div class="w-8em h-8em" innerHTML={logo} />}
        >
          <div class="text-7em h-1em mb-8">{iconTitle().icon}</div>
        </Show>
      </div>
      <header class="px-4 py-2 sticky top-0 z-99 flex justify-between items-center">
        <div
          class="flex items-center text-2xl cursor-pointer"
          onClick={() => {
            scrollTo("main", -48)
          }}
        >
          <Show
            when={iconTitle().title}
            fallback={
              <>
                <span class="text-transparent font-extrabold bg-clip-text bg-gradient-to-r dark:from-yellow-300 from-yellow-600 dark:to-red-700 to-red-700 mr-1">
                  ChatGPT
                </span>

              </>
            }
          >
            <span class="ml-1 font-extrabold text-slate-7 dark:text-slate">
              {iconTitle().title}
            </span>
          </Show>
        </div>
        <ThemeToggle />

        {/*<span class="ml-1 font-extrabold text-slate-7 dark:text-slate"*/}
        {/*><a style="font-size:18px" href="https://nav.iculture.cc" target="_blank">FancyPig导航站</a></span*/}
        {/*>*/}
        <p mt-1 text-slate op-60>gpt-3.5-turbo(4k)</p>


      </header>

      {/*<div mt-2>*/}
      {/*  <div style="max-width:50%;position: relative; float:left;">*/}
      {/*    <a href="https://shop.51buygpt.com" target="_blank">*/}
      {/*      <img style="border-radius:14px" src="/gg3.jpg" alt="BOX小铺"/>*/}
      {/*      <span style="position:absolute;top:0;right:0;color:#97a3b6;padding:2px;font-size:.25rem">广告</span>*/}
      {/*    </a>*/}
      {/*  </div>*/}

      {/*  <div style="width:50%;position: relative;float: right;">*/}
      {/*    <a href="https://openai3.xyz" target="_blank">*/}
      {/*      <img style="border-radius:14px" src="/gg1.png" alt="独角兽"/>*/}
      {/*      <span style="position:absolute;top:0;right:0;color:#97a3b6;padding:2px;font-size:.25rem">广告</span>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div id="zsm" style="position: fixed; bottom: 0px; right: 0px;z-index:999; width: 20%; height: auto;">
        <a href="/zsm.jpg" target="_blank">
          <img src="/zsm.jpg" alt="赞赏" style="width: 100%;" title="老板支持一下吧~"></img>
        </a>
        <button id="bbuu" onclick={aa} title="关闭" style="position: absolute;
        top: 0px;
        left: 0px;
        padding-top:0.5rem;
        padding-bottom:0.5rem;
        padding-left:1rem;
        padding-right:1rem;
        --un-bg-opacity:0.15;
        border-radius:1.125rem;
        height:2.5rem;
        cursor:pointer;
        --un-text-opacity: 1;
        --un-bg-opacity: 0.15;
        color: rgba(148,163,184,var(--un-text-opacity));
        background-color:rgba(182,203,240,var(--un-bg-opacity));"><span>-</span></button>
      </div>

    </>
  )
}
