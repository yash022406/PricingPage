const container = document.getElementById("slider-component")
const slider = document.getElementById("slider")
const tooltip = document.getElementById("tooltip")
const growthPlan = document.getElementById('growth')
const customPlan = document.getElementById('custom')
const popular = document.getElementById("popular")


slider.oninput = function(){
    tooltip.innerHTML = this.value
  //   var sliderPos = this.getBoundingClientRect();
  // var tooltipPos = (this.value / 150) * sliderPos.width - (tooltip.offsetWidth/2) ;
  // tooltip.style.left = tooltipPos + "px";
}
slider.addEventListener("input", function() {
    var sliderValue = parseInt(slider.value);
    // console.log(sliderValue)
  
    if (sliderValue < 200) {
      growthPlan.classList.add("selected");
      popular.innerHTML = "Recommended";
      growthPlan.classList.remove('plan')
      customPlan.classList.remove("selected");
      customPlan.classList.add('plan')
    } else {
      growthPlan.classList.remove("selected");
      popular.innerHTML = "Popular"
      growthPlan.classList.add('plan')
      customPlan.classList.add("selected");
      customPlan.classList.remove('plan')
    }
  });

  