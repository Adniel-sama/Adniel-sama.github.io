$(function(){

  let projects = [];
  let currentIndex = 0;

  function loadProject(btn){
    $('#modalTitle').text(btn.data('title') || 'Proyecto');
    $('#modalDesc').text(btn.data('desc') || '');
    const img = btn.data('image') || '';
    $('#modalImage').attr('src', img).toggle(Boolean(img));
    $('#modalRepo').attr('href', btn.data('repo') || '#');
  }

  function updateArrows(){
    $('#prevProject').prop('disabled', currentIndex === 0);
    $('#nextProject').prop('disabled', currentIndex === projects.length - 1);
  }

  // FILTRO
  $('.filter-btn').on('click', function(){
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    const filter = $(this).data('filter');
    if(filter === 'all') $('.project-card').show();
    else {
      $('.project-card').each(function(){
        const tags = $(this).data('tags');
        if(String(tags).indexOf(filter) !== -1) $(this).show();
        else $(this).hide();
      });
    }
  });

  // CUANDO SE ABRE EL MODAL
  $('#projectModal').on('show.bs.modal', function(event){
    const btn = $(event.relatedTarget);

    // recalcula proyectos visibles
    projects = $('.project-card:visible').find('button[data-bs-target="#projectModal"]').toArray();
    currentIndex = projects.indexOf(btn[0]);

    loadProject(btn);
    updateArrows();
  });

  // FLECHAS
  $('#prevProject').click(function(){
    if(currentIndex > 0){
      currentIndex--;
      loadProject($(projects[currentIndex]));
      updateArrows();
    }
  });

  $('#nextProject').click(function(){
    if(currentIndex < projects.length - 1){
      currentIndex++;
      loadProject($(projects[currentIndex]));
      updateArrows();
    }
  });

  // TECLADO
  $(document).on('keydown', function(e){
    if(!$('#projectModal').hasClass('show')) return;
    if(e.key === "ArrowRight") $('#nextProject').click();
    if(e.key === "ArrowLeft") $('#prevProject').click();
  });

  // SWIPE
  let touchStartX = 0;
  let touchEndX = 0;

  $('#projectModal').on('touchstart', function(e){
    touchStartX = e.originalEvent.changedTouches[0].screenX;
  });

  $('#projectModal').on('touchend', function(e){
    touchEndX = e.originalEvent.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;
    if(Math.abs(swipeDistance) < 50) return;
    if(swipeDistance > 0) $('#prevProject').click();
    else $('#nextProject').click();
  });

});