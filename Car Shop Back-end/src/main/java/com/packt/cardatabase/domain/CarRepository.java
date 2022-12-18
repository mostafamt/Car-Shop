package com.packt.cardatabase.domain;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CarRepository extends CrudRepository<Car, Long> {
	// Fetch cars by brand
	List<Car> findByBrand(@Param("brand") String brand);
	
	// Fetch cars by color
	List<Car> findByColor(@Param("color") String color);
	
//	// Fetch cars by productionYear
//	List<Car> findByProductionYear(int productionYear);
//	
//	// Fetch cars by brand and model
//	List<Car> findByBrandAndModel(String brand, String model);
//	
//	// Fetch cars by brand or color
//	List<Car> findByBrandOrColor(String brand, String color);
//	
//	// Fetch cars by brand and sort by productionYear
//	List<Car> findByBrandOrderByProductionYearAsc(String brand);
//	
//	// Fetch cars by brand using SQL
////	@Query("select c from Car c where c.brand like %?1")
////	List<Car> findByBrandEndsWith(String brand);
}
