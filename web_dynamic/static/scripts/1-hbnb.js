$(document).ready(() =>{
	$('input=[type="checkbox"]').change(() =>{
		const amenities = [];
		$('input=[type="checkbox"]:checked').each(() =>{
		const amenityId = $(this).data('id');
		const amenityName = $(this).data('name');
		amenities.push({
			'id':amenityId,
			'name':amenityName

		});
		});
		const list = amenities.map((amenity) =>{
			return amenity.name
		}).join(', ');

	});

});
