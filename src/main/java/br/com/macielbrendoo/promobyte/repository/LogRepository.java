package br.com.macielbrendoo.promobyte.repository;

import br.com.macielbrendoo.promobyte.model.Logs;
import org.springframework.data.repository.CrudRepository;

public interface LogRepository extends CrudRepository<Logs, Integer> {
}
