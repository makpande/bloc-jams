var animatePoints = function() {
    var points = document.getElementsByClassName('point');
    
    
    var revealPoint = function(pointIndex) {
        points[pointIndex].style.opacity = 1;
        points[pointIndex].style.transform = "scaleX(1) translateY(0)";
        points[pointIndex].style.msTransform = "scaleX(1) translateY(0)";
        points[pointIndex].style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    for (var i = 0; points.length > i; i++) {
        revealPoint(i);
    }
};
