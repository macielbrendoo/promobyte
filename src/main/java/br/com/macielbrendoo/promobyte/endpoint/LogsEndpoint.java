package br.com.macielbrendoo.promobyte.endpoint;

import br.com.macielbrendoo.promobyte.repository.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("logs")
public class LogsEndpoint {
    @Autowired
    private final LogRepository logRepository;

    public LogsEndpoint(LogRepository logRepository) {
        this.logRepository = logRepository;
    }


    @GetMapping("/")
    public ResponseEntity<?> getLogs() {
        return new ResponseEntity<>(logRepository.findAll() ,HttpStatus.OK);
    }
}
