function pagination(){
		//deklaracje zmiennych i selektorów
		
		var req_num_row=5;
		var $tr=jQuery('tbody tr');
		var total_num_row=$tr.length;
		var num_pages=0;
		
		//setter zmiennej num_pages
		
		if(total_num_row % req_num_row ==0){
			num_pages=total_num_row / req_num_row;
		}
		if(total_num_row % req_num_row >=1){
			num_pages=total_num_row / req_num_row;
			num_pages++;
			num_pages=Math.floor(num_pages++);
		}
		
		//wypisuje ilość stron w divie #pagination
		
		for(var i=1; i<=num_pages; i++){
			jQuery('#pagination').append('<a href="#" class="page" rel="'+i+'">'+i+'</a> ');
		}
		//pokazuje określoną liczbę wierszy
		
		$tr.each(function(i){
			jQuery(this).hide();
			if(i+1 <= req_num_row){
				$tr.eq(i).show();
			}
		});
		
		
		jQuery('#pagination a').click(function(e){
		
			e.preventDefault();
			$tr.hide();
			var page=jQuery(this).text();
			var temp=page-1;
			var start=temp*req_num_row;
			
			
			for(var i=0; i< req_num_row; i++){
				
				$tr.eq(start+i).show();
			
			}
		});
	}
	
	


jQuery('document').ready(function(){
	pagination();
	
});
