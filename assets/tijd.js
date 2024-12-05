const canvas = document.getElementById("clock");
const ctx = canvas.getContext("2d");

function drawClock() {
    const now = new Date();
    const radius = canvas.width / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tekenen van de klokcirkel
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";
    ctx.stroke();

    // Teken de cijfers
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let num = 1; num <= 12; num++) {
        const angle = (num * Math.PI) / 6;
        const x = radius + Math.cos(angle - Math.PI / 2) * (radius - 20);
        const y = radius + Math.sin(angle - Math.PI / 2) * (radius - 20);
        ctx.fillText(num.toString(), x, y);
    }

    // Teken de wijzers
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Uurwijzer
    const hourAngle = ((hours + minutes / 60) * Math.PI) / 6 - Math.PI / 2;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.lineTo(
        radius + Math.cos(hourAngle) * (radius - 40),
        radius + Math.sin(hourAngle) * (radius - 40)
    );
    ctx.stroke();

    // Minuutwijzer
    const minuteAngle = ((minutes + seconds / 60) * Math.PI) / 30 - Math.PI / 2;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.lineTo(
        radius + Math.cos(minuteAngle) * (radius - 20),
        radius + Math.sin(minuteAngle) * (radius - 20)
    );
    ctx.stroke();

    // Secondewijzer
    const secondAngle = (seconds * Math.PI) / 30 - Math.PI / 2;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.lineTo(
        radius + Math.cos(secondAngle) * (radius - 10),
        radius + Math.sin(secondAngle) * (radius - 10)
    );
    ctx.stroke();
}

setInterval(drawClock, 1000);
drawClock();