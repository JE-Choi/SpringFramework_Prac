package com.devfun.dao;
 
import java.util.List;
 
import com.devfun.vo.WineQualitylVO;
import com.devfun.vo.WineAlcoholVO;
 
public interface WineDAO {
    public List<WineQualitylVO> selectWineQuality() throws Exception;
    public List<WineAlcoholVO> selectWineAlcohol() throws Exception;
}