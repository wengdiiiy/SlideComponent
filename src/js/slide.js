var Slide = function () {
	var sPanelContainerSelector = '.panel_container';
	var sPanelItemSelector = '.panel_item';

	var nWidth = 0;
	// var nHeight = 0; 
	var nPanelNum = 0;
	var aPanels = [];
	var elPrevBtn, elNextBtn;

	var nCurrentIndex = 0;
	var nLastIndex = nPanelNum - 1;


	function init(){
		aPanels = $(sPanelItemSelector);
		nPanelNum = $(sPanelItemSelector).length;
		nWidth = $(sPanelContainerSelector).width() / nPanelNum;
		elPrevBtn = $('.btn_prev');
		elNextBtn = $('.btn_next');

		attachEvents();
	}

	function attachEvents(){
		elPrevBtn.on('click', $.proxy(movePrev, this));
		elNextBtn.on('click', $.proxy(moveNext, this));
	}

	function movePrev(){
		console.log('현재 index' + nCurrentIndex);

		if(nCurrentIndex == 0){
			nCurrentIndex = nPanelNum - 1;
		}else{
			nCurrentIndex--;
		}

		console.log('움직이고 난 뒤 index' + nCurrentIndex);
	}

	function moveNext(){
		console.log('현재 index' + nCurrentIndex);

		if(nCurrentIndex == nPanelNum - 1){
			nCurrentIndex = 0;
		}else{
			nCurrentIndex++;
		}
		

		console.log('움직이고 난 뒤 index' + nCurrentIndex);
	}

    function activate() {
    	init();
    }

    return {
        activate : function () {
            return activate();
        }
    }
};