package com.devfun.service;
 
import java.util.List;
 
import javax.inject.Inject;
 
import org.springframework.stereotype.Service;
 
import com.devfun.dao.WineDAO;
import com.devfun.vo.WineQualitylVO;
import com.devfun.vo.WineAlcoholVO;
 
@Service
public class WineServiceImpl implements WineService {
 
    @Inject
    private WineDAO dao;
    
    @Override
    public List<WineQualitylVO> selectWineQuality() throws Exception {
        return dao.selectWineQuality();
    }

	@Override
	public List<WineAlcoholVO> selectWineAlcohol() throws Exception {
		return dao.selectWineAlcohol();
	}
 
}
