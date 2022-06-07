document.querySelector('#equal').onclick = () => {
    const timeOneH = document.querySelector('#time1').value;
    const timeTwoM = document.querySelector('#time2').value;
    const timeThreeS = document.querySelector('#time3').value;
    const timeFourH = document.querySelector('#time4').value;
    const timeFiveM = document.querySelector('#time5').value;
    const timeSixS = document.querySelector('#time6').value;
    const resultHours = Number(timeOneH) + Number(timeFourH);
    const resultMinutes = Number(timeTwoM) + Number(timeFiveM);
    const resultSeconds = Number(timeThreeS) + Number(timeSixS);
    let resultDate = new Date();
    resultDate.setHours(resultHours,resultMinutes,resultSeconds);
    document.querySelector('#answer').value = resultDate.toString().split(' ')[4];
}

document.querySelector('#reset').onclick = () => {
    document.querySelector('#time1').value = '';
    document.querySelector('#time2').value = '';
    document.querySelector('#time3').value = '';
    document.querySelector('#time4').value = '';
    document.querySelector('#time5').value = '';
    document.querySelector('#time6').value = '';
    document.querySelector('#answer').value = '00:00:00';
}