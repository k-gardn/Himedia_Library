package com.care.library.cultural;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CulturalMapper {
    void insertCultural(CulturalDTO culturalDTO);
    
    ArrayList<CulturalDTO> culForm(@Param("begin")int begin, @Param("end")int end);
    
    int count();
	
}
