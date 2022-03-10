package ci.mfpma.dq.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.Role;
import ci.mfpma.dq.repository.RoleRepository;
import ci.mfpma.dq.service.RoleService;


@Service
public class RoleServiceImpl implements RoleService {
	
	@Autowired
	private RoleRepository roleRepository;

	public List<Role> getAll() {
		return roleRepository.findAll();
	}

	@Override
	public void save(Role role) {
		this.roleRepository.save(role);		
	}

	@Override
	public Role getById(Long roleId) {
	    return roleRepository.findById(roleId).get();
	}

	@Override
	public void deleteById(Role role) {
	}

	@Override
	public List<Role> findAllByOrderByNomRoleAsc() {
		return roleRepository.findAllByOrderByNomRoleAsc();
	}

	@Override
	public Role findByNomRole(String nomRole) {
		return roleRepository.findByNomRole(nomRole);
	}
	
	
}
