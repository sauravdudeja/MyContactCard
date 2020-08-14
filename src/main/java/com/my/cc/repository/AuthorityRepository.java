package com.my.cc.repository;

import com.my.cc.domain.Authority;

/**
 * Spring Data Couchbase repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends N1qlCouchbaseRepository<Authority, String> {}
