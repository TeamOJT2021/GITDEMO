package com.sbifpt.mirai.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sbifpt.mirai.web.dto.entity.Tutorial;
import com.sbifpt.mirai.web.exception.ResourceNotFoundException;
import com.sbifpt.mirai.web.repository.TutorialRepository;

//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/auth")
public class TutorialController {

	@Autowired
	TutorialRepository tutorialRepository;

	@GetMapping("/tutorials")
	public ResponseEntity<Map<String, Object>> getAllTutorials(@RequestParam(required = false) String title,
			@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "5") int size) {
		List<Tutorial> tutorials = new ArrayList<Tutorial>();
		Pageable paging = PageRequest.of(page, size);

		Page<Tutorial> pageTuts;
		if (title == null)
			pageTuts = tutorialRepository.findAll(paging);
		else
			pageTuts = tutorialRepository.findByTitleContaining(title, paging);

		tutorials = pageTuts.getContent();

		if (tutorials.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

		Map<String, Object> response = new HashMap<>();
		response.put("tutorials", tutorials);
		response.put("currentPage", pageTuts.getNumber());
		response.put("totalItems", pageTuts.getTotalElements());
		response.put("totalPages", pageTuts.getTotalPages());

		return new ResponseEntity<>(response, HttpStatus.OK);

	}
//	@PreAuthorize("hasRole('ADMIN') or hasRole('PRODUCTMANAGER')")
	@GetMapping("/tutorials/{id}")
	public ResponseEntity<Tutorial> getTutorialById(@PathVariable("id") long id) {
		Optional<Tutorial> tutorialData = tutorialRepository.findById(id);

		if (tutorialData.isPresent()) {
			return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
		} else {
			throw new ResourceNotFoundException("Not found Tutorial with id = " + id);
		}
	}

	@PostMapping("/tutorials")
	public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial) {
		Tutorial _tutorial = tutorialRepository
				.save(new Tutorial(tutorial.getTitle(), tutorial.getDescription(), false));
		return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);

	}

//	@PreAuthorize("hasRole('ADMIN') or hasRole('PRODUCTMANAGER')")
	@PutMapping("/tutorials/{id}")
	public ResponseEntity<Tutorial> updateTutorial(@PathVariable("id") long id, @RequestBody Tutorial tutorial) {
		Optional<Tutorial> tutorialData = tutorialRepository.findById(id);

		if (tutorialData.isPresent()) {
			Tutorial _tutorial = tutorialData.get();
			_tutorial.setTitle(tutorial.getTitle());
			_tutorial.setDescription(tutorial.getDescription());
			_tutorial.setPublished(tutorial.isPublished());
			return new ResponseEntity<>(tutorialRepository.save(_tutorial), HttpStatus.OK);
		} else {
			throw new ResourceNotFoundException("Not found Tutorial with id = " + id);
		}
	}

	@DeleteMapping("/tutorials/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		tutorialRepository.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@DeleteMapping("/tutorials")
	public ResponseEntity<HttpStatus> deleteAllTutorials() {
		tutorialRepository.deleteAll();
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}

	@GetMapping("/tutorials/published")
	public ResponseEntity<Map<String, Object>> findByPublished(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "5") int size) {

		List<Tutorial> tutorials = new ArrayList<Tutorial>(); 
		Pageable paging = PageRequest.of(page, size);

		if (tutorials.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		Page<Tutorial> pageTuts = tutorialRepository.findByPublished(true, paging);
		tutorials = pageTuts.getContent();
		System.err.println(tutorials);
		Map<String, Object> response = new HashMap<>();
		response.put("tutorials", tutorials);
		response.put("currentPage", pageTuts.getNumber());
		response.put("totalItems", pageTuts.getTotalElements());
		response.put("totalPages", pageTuts.getTotalPages());

		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}