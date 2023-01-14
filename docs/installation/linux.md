---
sidebar_position: 1
---

# Linux

Welcome to the Warhorse installation walkthrough! Follow these steps and we will have you up and running in no time.

Follow instructions below for recommended setup on a regular Linux server. Additionally see our installation instructions for [Docker ](https://war-horse.io./docs/installation/docker) and [Windows ](https://war-horse.io./docs/installation/windows).

## Ansible

```bash
sudo apt-get update
sudo apt-get install software-properties-common -y
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible-core -y
```

## Terraform

```bash
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform
```

## Warhorse

### Clone Repo

```bash
git clone https://github.com/warhorse/warhorse
```

### Install Requirements

```bash
ansible-galaxy install -r requirements.yml -p roles/
ansible-galaxy collection install community.general ansible.posix community.crypto
```

## Done





