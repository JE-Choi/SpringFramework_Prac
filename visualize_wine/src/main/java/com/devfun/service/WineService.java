package com.devfun.service;
 
import java.util.List;
 
import com.devfun.vo.WineQualitylVO;
import com.devfun.vo.WineAlcoholVO;
 
public interface WineService {
    public List<WineQualitylVO> selectWineQuality() throws Exception;
    public List<WineAlcoholVO> selectWineAlcohol() throws Exception;
}