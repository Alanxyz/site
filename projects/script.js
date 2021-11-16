function show(){
    let html = document.getElementById('html');
    let css = document.getElementById('css');
    let js = document.getElementById('js')

    document.getElementById('iframe').setAttribute("srcdoc", `${html.value} <style>${css.value}</style> <script>${js.value}</script>`);
}
