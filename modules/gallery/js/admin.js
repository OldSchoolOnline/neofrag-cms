/* Déclaration de la zone de téléchargement des images */
Dropzone.autoDiscover = false;
$('#gallery-dropzone').dropzone({
	dictDefaultMessage: '<div class="text-center"><h2><?php echo icon('fa-cloud-upload'); ?> DropZone</h2><p class="text-muted">Déposez vos images dans cette zone, ou cliquez ici</p></div>',
	addRemoveLinks: true,
	parallelUploads: 20,
		var progressBar  = $('.progress-bar');
		$('.upload-infos').hide();
		/* On lance l'upload sur clic du bouton */
		});
			$('.label-dropzone').hide();
		
		/* Event: fichier ajouté, on le retire de la DropZone */
		myDropzone.on('complete', function(file, total_files) {
			myDropzone.removeFile(file);
			if(myDropzone.getQueuedFiles().length > 0 && myDropzone.getUploadingFiles().length > 0) {
				myDropzone.processQueue();
			}
		});
		/* Event: quand un fichier est supprimé */
				$('.upload-infos').hide();
				$('.label-dropzone').show();
			$('.upload-infos').hide();
			location.reload();
		
		myDropzone.on('totaluploadprogress', function(totalPercentage, totalBytesToBeSent, totalBytesSent) {
			var sizeInMB     = (totalBytesToBeSent / (1024*1024)).toFixed(2);
			var sentsizeInMB = (totalBytesSent / (1024*1024)).toFixed(2);
			progressBar.css({width:totalPercentage+'%'});
			if(totalPercentage === 100) {
				$('.progress-percent').html('<i class="fa fa-spinner fa-spin"></i> Encore un tout petit instant...');
			} else {
				$('.progress-percent').html('<b><i class="fa fa-spinner fa-spin"></i> '+Math.round(totalPercentage)+'%</b> Veuillez patienter...');
			}
			$('.progress-size').html(sentsizeInMB+'/'+sizeInMB+' Mo');
		});
	}
});
/* Actions pour changer de type d'affichage */
$('.vignettes-content > #gallery-table').hide();
$('.vignettes-content > #gallery-vignettes').show();
$('#gallery-display-vignettes').on('click', function() {
	$('.vignettes-content > #gallery-table').hide();
	$('.vignettes-content > #gallery-vignettes').show();
	$(this).toggleClass('active');
	$('#gallery-display-tableau').removeClass('active');
});
$('#gallery-display-tableau').on('click', function() {
	$('.vignettes-content > #gallery-table').show();
	$('.vignettes-content > #gallery-vignettes').hide();
	
	$(this).toggleClass('active');
	$('#gallery-display-vignettes').removeClass('active');
});