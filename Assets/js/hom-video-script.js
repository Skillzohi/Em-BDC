$(window).load(function(){
    if ($('#embed_container').length > 0) {
        var container = document.getElementById('embed_container');
        var video = document.getElementById('myVideo');
        var ratio = 9 / 16; //this is why the 56.25% padding hack exists
        function resizer() {
            var width = parseInt(window.getComputedStyle(container)['width'], 10);
            var height = (width * ratio);
            $(video).css('width', width + 'px');
            $(video).css('height', height + 'px');
            $(video).css('marginTop', '-3.278%');
            $(container).css('height', (height * 0.88) + 'px');
        }
        window.addEventListener('resize', resizer, false);
        resizer();
    }
});