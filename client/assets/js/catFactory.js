
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color, code) {
    $('#body, #left_arm, #right_arm, #head').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//Change colour of Paws, Feet and Ears
function earPawFeetColor(color, code) {
    $('#paw, #left_foot, #right_foot, .ear').css('background', '#' + color)
    $('#earPawFeetcode').html('code: ' + code)
    $('#dnaears').html(code)
}

//Change colour of Tummy and Mouth Area
function tummyMouthAreaColor(color, code) {
    $('#mouth_area, #tummy').css('background', '#' + color)
    $('#tummyMouthAreacode').html('code: ' + code)
    $('#dnatummy').html(code)
}

//Change the Eye colour
function eyeColor(color, code) {
    $('.eye').css('background', '#' + color)
    $('#eyecode').html('code: ' + code)
    $('#dnaeyes').html(code)
}

//Changes the shape of the eyes
function eyeVariation(num) {

    $('#dnashape').html(num)

    switch (num) {
        case 1:
            resetEyes()
            $('#eyeBadgeName').html('Basic')
            break
        case 2:
            resetEyes()
            $('#eyeBadgeName').html('Round')
            roundEyes()          
            break
        case 3:
            resetEyes()
            $('#eyeBadgeName').html('Right')
            rightEyes()
            break
        case 4:
            resetEyes()
            $('#eyeBadgeName').html('Left')
            leftEyes()
            break  
        case 5:
            resetEyes()
            $('#eyeBadgeName').html('Small')
            smallEyes()
            break
        case 6:
            resetEyes()
            $('#eyeBadgeName').html('Chinese')
            chineseEyes()
            break
        case 7:
            resetEyes()
            $('#eyeBadgeName').html('Stoner')
            stonerEyes()
            break
        case 8: 
            resetEyes()
            $('#eyeBadgeName').html('Wink')
            winkEyes()
            break
        case 9:
            resetEyes()
            $('#eyeBadgeName').html('Dead')
            deadEyes()
            break
        case 10:
            resetEyes()
            $('#eyeBadgeName').html('Squint')
            squintEyes()
            break
    }
}

function resetEyes() {
     $('.eye').css('justify-content', 'center')
     $('.eye').find('div').css({'width':'20px', 'height':'50px', 'border-radius':'50%'})
     $('.left_pupil').css('transform', 'rotate(0deg)')
     $('.right_pupil').css('transform', 'rotate(0deg)')
     $('.left_pupil2').css('transform', 'rotate(0deg)')
     $('.right_pupil2').css('transform', 'rotate(0deg)')
}

function roundEyes() {
     $('.eye').find('div').css('width', '51px')
}

//css({"propertyname":"value","propertyname":"value",...});
function rightEyes() {
     $('.eye').css('justify-content', 'flex-end')
}

function leftEyes() {
     $('.eye').css('justify-content', 'flex-start')
}

function smallEyes() {
    $('.eye').find('div').css('height', '20px')
}

function chineseEyes() {
    $('.left_pupil').css('transform', 'rotate(-45deg)')
    $('.right_pupil').css('transform', 'rotate(45deg)')
}

function stonerEyes() {
    $('.left_pupil').css('transform', 'rotate(45deg)')
    $('.right_pupil').css('transform', 'rotate(-45deg)')
}

function winkEyes() {
    $('.left_pupil').css({'height':'5px', 'width':'50px'})
    $('.left_pupil2').css('height', '0px')
}

function deadEyes() {
    $('.eye').find('div').css({'border-radius': '0%', 'transform':'rotate(45deg'})
    $('.left_pupil2').css('transform', 'rotate(90deg)')
    $('.right_pupil2').css('transform', 'rotate(90deg)')

}

function squintEyes() {
    $('.eye_left').css({'display':'flex', 'justify-content':'flex-end', 'align-items':'center'})
    $('.eye_right').css({'display':'flex', 'justify-content':'flex-start', 'align-items':'center'})
}

//Changes the shape of the Tummy decoration
function decorationVariation(num) {

    $('#dnadecoration').html(num)

    switch (num) {
        case 1:
            $('#decorationBadgeName').html('Basic')
            resetDecoration()
            break
        case 2:
            resetDecoration()
            $('#decorationBadgeName').html('Apart')
            apartDecoration()
            break
        case 3:
            resetDecoration()
            $('#decorationBadgeName').html('Pyramid')   
            pyramidDecoration()
            break
        case 4:
            resetDecoration()
            $('#decorationBadgeName').html('Fat')
            fatDecoration()
            break
        case 5:
            resetDecoration()
            $('#decorationBadgeName').html('Circle')
            circleDecoration()
            break
        case 6:
            resetDecoration()
            $('#decorationBadgeName').html('Edgy')
            edgyDecoration()
            break
        case 7:
            resetDecoration()
            $('#decorationBadgeName').html('Vertical')
            verticalDecoration()
            break
        case 8:
            resetDecoration()
            $('#decorationBadgeName').html('Square')
            squareDecoration()
            break     
        case 9:
            resetDecoration()
            $('#decorationBadgeName').html('Opposite')
            oppositeDecoration()
            break   
        case 10:
            resetDecoration()
            $('#decorationBadgeName').html('Random')
            randomDecoration()
            break                        
    }
}

function resetDecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style   
    $('#decoration').css({'justify-content':'space-evenly', 'flex-direction':'column'})
    $('#top_decoration').css({'width':'60px', 'height':'20px', 'border-radius':'50%'})
    $('#middle_decoration').css({'width':'100px', 'height':'20px', 'border-radius':'50%'})
    $('#bottom_decoration').css({'width':'60px', 'height':'20px', 'border-radius':'50%'})
}

function apartDecoration() {
    $('#decoration').css('justify-content', 'space-between')
}

function pyramidDecoration() {
    $('#top_decoration').css('width', '30px')
    $('#middle_decoration').css('width', '60px')
    $('#bottom_decoration').css('width', '90px')
}

function fatDecoration() {
    $('#top_decoration').css('height', '35px')
    $('#middle_decoration').css('height', '40px')
    $('#bottom_decoration').css('height', '35px') 
}

function circleDecoration() {
    $('#top_decoration').css({'width':'35px', 'height':'35px'})
    $('#middle_decoration').css({'width':'75px', 'height':'75px'})
    $('#bottom_decoration').css({'width':'35px', 'height':'35px'})
}

function edgyDecoration() {
    $('#top_decoration').css({'width':'60px', 'height':'35px', 'border-radius':'50% 50% 100% 100%'})
    $('#middle_decoration').css({'width':'100px', 'height':'40px', 'border-radius':'38%'})
    $('#bottom_decoration').css({'width':'60px', 'height':'35px', 'border-radius':'100% 100% 50% 50%'}) 
}

function verticalDecoration() {
    $('#decoration').css({'flex-direction':'row', 'justify-content':'space-between'})
    $('#top_decoration').css({'width':'20px', 'height':'80px'})
    $('#middle_decoration').css({'width':'25px', 'height':'130px'})
    $('#bottom_decoration').css({'width':'20px', 'height':'80px'})
}

function squareDecoration() {
    $('#top_decoration').css('border-radius', '0px')
    $('#middle_decoration').css('border-radius', '0px')
    $('#bottom_decoration').css('border-radius', '0px')
}

function oppositeDecoration() {
    $('#top_decoration').css('width', '100px')
    $('#middle_decoration').css('width', '60px')
    $('#bottom_decoration').css('width', '100px')
}

function randomDecoration() {
    $('#top_decoration').css({'width':'35px', 'height':'35px'})
    $('#middle_decoration').css('border-radius', '0%')
    $('#bottom_decoration').css({'width':'20px', 'height':'60px'})
}

//Change the Top and Bottom Decoration Colour 
function topBottomDecorationColor(color, code) {
    $('#top_decoration, #bottom_decoration').css('background', '#' + color)
    $('#topBottomDecorationcode').html('code: ' + code)
    $('#dnadecorationTopBottom').html(code)
}

//Change the Middle Decoration colour
function middleDecorationColor(color, code) {
    $('#middle_decoration').css('background', '#' + color)
    $('#middleDecorationcode').html('code: ' + code)
    $('#dnadecorationMiddle').html(code)
}

//Animation
function animationVariation(num) {

    $('#dnaanimation').html(num)

    switch (num) {
        case 1:
            resetAnimation()
            $('#animationcode').html('Basic')
            break
        case 2: 
            resetAnimation()
            $('#animationcode').html('Indian')
            headRotate()
            break
        case 3:
            resetAnimation()
            $('#animationcode').html('Bigfoot')
            bigFoot()
            break
        case 4:
            resetAnimation()
            $('#animationcode').html('LLR')
            LLR()
            break
        case 5:
            resetAnimation()
            $('#animationcode').html('Round the World')
            roundTheWorld()
            break
        case 6:
            resetAnimation()
            $('#animationcode').html('Dali')
            dali()
            break
        case 7:
            resetAnimation()
            $('#animationcode').html('Rudolf')
            rudolf()
            break
        case 8:
            resetAnimation()
            $('#animationcode').html('Wave')
            wave()
            break
        case 9:
            resetAnimation()
            $('#animationcode').html('Ears')
            ears()
            break
        case 10:
            resetAnimation()
            $('#animationcode').html('Cheeky')
            cheeky()
            break
    }
}

function resetAnimation() {
    $('#head').removeClass('headRotate');
    $('#right_foot').removeClass('bigFoot');
    $('#left_foot').removeClass('bigFoot');
    $('.eye').removeClass('LLR');
    $('.roundTheWorld').removeClass('roundTheWorld');
    $('.whisker').removeClass('dali');
    $('#nose').removeClass('rudolf');
    $('#left_arm').removeClass('wave');
    $('.left_ear').removeClass('ears');
    $('.right_ear').removeClass('ears');
    $('#tongue').removeClass('cheeky');
}

function headRotate() {
    $('#head').addClass('headRotate');
}

function bigFoot() {
    $('#right_foot').addClass('bigFoot');
    $('#left_foot').addClass('bigFoot');
}

function LLR() {
    $('.eye').addClass('LLR');
}

function roundTheWorld() {
    $('#head').addClass('roundTheWorld');
}

function dali() {
    $('.whisker').addClass('dali');
}

function rudolf() {
    $('#nose').addClass('rudolf');
}

function wave() {
    $('#left_arm').addClass('wave');
}

function ears() {
    $('.left_ear').addClass('ears');
    $('.right_ear').addClass('ears');
}

function cheeky() {
    $('#tongue').addClass('cheeky');
}

function showColours() {
    $('#catColors').show();
    $('#catCattributes').hide();
}

function showCattributes() {
    $('#catCattributes').show();
    $('#catColors').hide();
}