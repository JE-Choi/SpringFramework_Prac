package com.devfun.dao;

import java.util.List;

import javax.inject.Inject;
 
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
 
import com.devfun.vo.WineQualitylVO;
import com.devfun.vo.WineAlcoholVO;
 
@Repository
public class WineDAOImpl implements WineDAO {
 
    @Inject
    private SqlSession sqlSession;
    
    private static final String Namespace = "com.devfun.mybatis.sql.wine";
    
    @Override
    public List<WineQualitylVO> selectWineQuality() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectWineQuality");
    }

	@Override
	public List<WineAlcoholVO> selectWineAlcohol() throws Exception {
		return sqlSession.selectList(Namespace+".selectWineAlcohol");
	}
 
}