const enabled = "enabled";
const disabled = "disabled";

function button() {
  let buttonId = document.getElementById(disabled);
  if (buttonId === null) {
    buttonId = document.getElementById(enabled);

    var bar1 = document.getElementById("bar-1");
    var bar2 = document.getElementById("bar-2");
    var bar3 = document.getElementById("bar-3");

    bar2.className = "w-8 h-1 border opacity-100 transition duration-100";
    bar1.className = "w-8 h-1 border transform transition duration-100";
    bar3.className = "w-8 h-1 border transform transition duration-100";

    var navbar = document.getElementById("navbar");
    navbar.className = "hidden sm:flex sm:space-x-8 poppins-500-fonts";

    var hideHeading = document.getElementById("heading");
    var hideContent = document.getElementById("content");
    var hideFooter = document.getElementById("footer");
    hideHeading.className = "heebo-font text-2xl md:text-3xl lg:text-4xl";
    hideContent.className = "inline mt-6";
    hideFooter.className = "inline";

    buttonId.id = disabled;
  } else {
    var bar1 = document.getElementById("bar-1");
    var bar2 = document.getElementById("bar-2");
    var bar3 = document.getElementById("bar-3");

    bar2.className = "w-8 h-1 border opacity-0 transition duration-100";
    bar1.className =
      "w-8 h-1 border transform rotate-45 relative top-2 transition duration-100";
    bar3.className =
      "w-8 h-1 border transform -rotate-45 relative bottom-2 transition duration-100";

    var hideHeading = document.getElementById("heading");
    var hideContent = document.getElementById("content");
    var hideFooter = document.getElementById("footer");
    hideHeading.className = "invisible heebo-font text-2xl md:text-3xl lg:text-4xl";
    hideContent.className = "hidden mt-6";
    hideFooter.className = "hidden";

    var navbar = document.getElementById("navbar");
    navbar.className =
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-8 sm:flex sm:space-x-8 poppins-500-fonts";

    buttonId.id = enabled;
  }
}
