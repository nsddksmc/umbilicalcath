function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GTN2MtifsX":
        Script1();
        break;
      case "5ewdcVxfjUy":
        Script2();
        break;
      case "69ZIF3Tw2sX":
        Script3();
        break;
      case "6Tpp5n2orqO":
        Script4();
        break;
      case "6HpVw4CQkvq":
        Script5();
        break;
      case "6ByXU6gtmZQ":
        Script6();
        break;
      case "5poSEIvBdCA":
        Script7();
        break;
      case "5ro0QBNWQJW":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

