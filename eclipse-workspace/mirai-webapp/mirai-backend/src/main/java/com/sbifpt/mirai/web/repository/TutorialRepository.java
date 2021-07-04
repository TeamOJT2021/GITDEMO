package com.sbifpt.mirai.web.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.Tutorial;

@Repository
public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
	
	  Page<Tutorial> findByPublished(boolean published, Pageable pageable);

	  Page<Tutorial> findByTitleContaining(String title, Pageable pageable);
	  
}
