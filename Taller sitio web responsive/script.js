const texts = [
    '...Vestibulum mollis, tortor ac congue commodo...',
    '...Nulla vel odio laoreet...',
    '...Consectetur adipiscing elit...',
    '...Donec ac nisi vitae eros scelerisque ultricies...'
];
let index = 0;
setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById('carousel-text').innerText = texts[index];
}, 2000);