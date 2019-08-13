import renderImage from '../src/render-img.js';

const test = QUnit.test;

QUnit.module('Render Img');

test('render an img', assert => {
    // arrange
    const expected = /*html*/ ` 
    <li class="card">
        <div>
            <h2>UniWhal</h2>
            <p>Horns: 1</p>
        </div>
        <p class="hidden">A unicorn and a narwhal nuzzling their horns</p>
        <div class="img-contain">
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
        </div>
    </li>
    `;

    // act
    const html = renderImage();
    // assert
    assert.htmlEqual(html, expected);
});