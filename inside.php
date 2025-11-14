<?php
function insideOut($arr){
    $n = count($arr);
    if($n % 2 !== 0) return $arr;
    $half = intdiv($n,2);
    $first = array_slice($arr,0,$half);
    $second = array_slice($arr,$half);
    return array_merge($second,$first);
}
function show($arr){
    echo "<pre>";
    print_r($arr);
    echo "</pre>";
}
$a1 = [1,2,2,1];
$a2 = ["Everyone","says","Kelly","is","REALLY","awesome"];
echo "<strong>Original:</strong>";
show($a1);
echo "<strong>Transformed:</strong>";
show(insideOut($a1));
echo "<hr/>";
echo "<h2>Example 2 (strings)</h2>";
echo "<strong>Original:</strong>";
show($a2);
echo "<strong>Transformed:</strong>";
show(insideOut($a2));
echo "<hr/>";
echo "<h2>Example 3 (odd length - unchanged)</h2>";
echo "<strong>Original:</strong>";
show($a3);
echo "<strong>Transformed (unchanged):</strong>";
show(insideOut($a3));
echo "<hr/>";
echo "<h2>Example 4 (even length)</h2>";
echo "<strong>Original:</strong>";
show($a4);
echo "<strong>Transformed:</strong>";
show(insideOut($a4));
?>

