package com.devfun.settingweb;

import javax.inject.Inject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import org.slf4j.*;
 
import com.devfun.vo.MovieVO;
import com.devfun.service.MovieService;
 
@RestController
public class restController {
	 private static final Logger logger = LoggerFactory.getLogger(restController.class);
	    
	    @Inject
	    private MovieService service;
	    
	    /**
	     * Simply selects the home view to render by returning its name.
	     */
	    @RequestMapping(value = "/restex")
	    public List<MovieVO> movieList() throws Exception{
	 
	        logger.info("home");
	        
	        List<MovieVO> movieList = service.selectMovie();
	        
	        //model.addAttribute("movieList", movieList);
	 
	        return movieList;
	    }
}
