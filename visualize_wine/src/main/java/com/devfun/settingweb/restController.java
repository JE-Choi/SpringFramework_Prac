package com.devfun.settingweb;

import javax.inject.Inject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import org.slf4j.*;
 
import com.devfun.vo.WineQualitylVO;
import com.devfun.vo.WineAlcoholVO;
import com.devfun.service.WineService;
 
@RestController
public class restController {
	 private static final Logger logger = LoggerFactory.getLogger(restController.class);
	    
	    @Inject
	    private WineService service;
	    
	    /**
	     * Simply selects the home view to render by returning its name.
	     */
	    @RequestMapping(value = "/selectQuality")
	    public List<WineQualitylVO> movieList() throws Exception{
	 
	        logger.info("home");
	        
	        List<WineQualitylVO> wineQualityVO = service.selectWineQuality();
	        
	        //model.addAttribute("movieList", movieList);
	 
	        return wineQualityVO;
	    }
	    
	    @RequestMapping(value = "/selectAlcohol")
	    public List<WineAlcoholVO> wineAlcoholList() throws Exception{
	 
	        logger.info("selectAlcohol");
	        
	        List<WineAlcoholVO> wine_alcoholVO = service.selectWineAlcohol();
	 
	        return wine_alcoholVO;
	    }
}
