function GetDist(x, y) {
  return (Math.sqrt((x ** 2) + (y ** 2)));
}

function InCircle(relX, relY, rotation, rotX, rotY, circX, circY, circSize) {
  rotation *= Math.PI/180;
  let cosRot = Math.cos(rotation);
  let sinRot = Math.sin(rotation);
  let nx = relX * cosRot - 
           relY * sinRot + 
           rotX;
  let ny = relY * cosRot + 
           relX * sinRot + 
           rotY
  let dist = GetDist(nx - circX, ny - circY)
  return((circSize / 2) >= dist);
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);