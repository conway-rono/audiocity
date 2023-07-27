const playlistTab=document.querySelector('#tab3');
playlistTab.addEventListener('click',()=>{
    document.querySelector('ul').classList.toggle('open');
})

const headline=document.querySelector('.headline');
const trendingTab=document.querySelector('#tab1');
trendingTab.onclick=()=>{
    headline.innerHTML=`<p>${trendingTab.textContent}!</p>`;
    document.querySelector('.container').classList.add('trending');
}

const homeTab=document.querySelector('#home');
homeTab.onclick=()=>{
    headline.innerHTML=`<p>enjoy all your favourite music!</p>`;
    document.querySelector('.container').classList.remove('trending');
}