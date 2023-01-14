---
sidebar_position: 1
---

# Simple Example

```
export ANSIBLE_VAULT_PASSWORD_FILE=./vault-env
```

```yaml
warhorse:
  general:
    op_number: "000-000"
    user_tag: 'user'
    ttl: '2023-12-12' #Kill Date
    ntp_timezone: 'Etc/Universal' # Time Zone Link
    vault_key: 'vault_key'
  dns:
    provider: "digitalocean"
    op_tld: 'example.com' # Dedicated Domain
  vm:
    - name: "teamserver"
      provider: "digitalocean"
      http_proxy: "traefik" # nginx,caddy
      traefik:
        acme_email: noemail@example.com # Lets Encrypt Email address
        dashboard: true
      firewall:
      golang:
  terraform:
    digitalocean_token: "token"
  users:
    - username: ralph
      name: Ralph
      authorized_keys:
      - "{{ lookup('file', '/Users/ralph/.ssh/id_rsa.pub') }}"
      shell: '/usr/bin/zsh'
      email: ralph@example.com
```

