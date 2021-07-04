package com.sbifpt.mirai.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.Period;

@Repository
public interface PeriodRepository extends JpaRepository<Period, Long>{
	
	@Query("SELECT p FROM Period p WHERE p.id = ?1")
	Period findByPeriodId(long periodId);
}
