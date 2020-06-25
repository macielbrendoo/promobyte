package br.com.macielbrendoo.promobyte.repository;

import br.com.macielbrendoo.promobyte.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
}
