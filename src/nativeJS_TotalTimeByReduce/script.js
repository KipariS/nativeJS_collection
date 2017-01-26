'use strict'

const videoSet = Array.from(document.querySelectorAll('[data-time]'));

const allTime = 
	videoSet
		.map( node => node.dataset.time )
		.map( time => {
			const [mins, secs] = time.split(':').map( str => parseFloat(str) )
			return (mins * 60) + secs;
		})
		.reduce( (total, currentItem) => {
			return total + currentItem;
		} );


let leftTime = allTime;
const totalHours = Math.floor(leftTime / 3600);
leftTime = leftTime % 3600;
const totalMinutes = Math.floor(leftTime / 60);
const totalSeconds = leftTime % 60;

// console.log(totalHours, totalMinutes, totalSeconds);

document.querySelector('.total').innerHTML = [totalHours,totalMinutes,totalSeconds].join(':');


















