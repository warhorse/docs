# Users

```yaml
users:
    - username: user1
      name: User One
      authorized_keys:
      - "{{ lookup('file', '/home/user1/id_rsa.pub') }}"
      shell: '/usr/bin/zsh'
      email: user1@example.com
    - username: user2
      name: User Two
      authorized_keys:
      - "https://github.com/user2.keys"
      shell: '/usr/bin/zsh'
      email: user2@example.com
```

