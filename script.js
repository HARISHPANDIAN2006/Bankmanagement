
    let account = {
      name: '',
      number: '',
      balance: 0
    };

    function createAccount() {
      account.name = document.getElementById('accName').value;
      account.number = document.getElementById('accNumber').value;
      account.balance = 0;
      showMessage(`Account created for ${account.name} (Acc No: ${account.number})`);
    }

    function deposit() {
      const amount = parseFloat(document.getElementById('depositAmount').value);
      if (amount > 0) {
        account.balance += amount;
        showMessage(`Deposited ₹${amount}. New Balance: ₹${account.balance}`);
      } else {
        showMessage(`Enter a valid deposit amount`);
      }
    }

    function withdraw() {
      const amount = parseFloat(document.getElementById('withdrawAmount').value);
      if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
        showMessage(`Withdrew ₹${amount}. New Balance: ₹${account.balance}`);
      } else {
        showMessage(`Invalid amount or insufficient funds`);
      }
    }

    function showBalance() {
      showMessage(`Account Holder: ${account.name}\nAcc No: ${account.number}\nBalance: ₹${account.balance}`);
    }

    function showMessage(msg) {
      document.getElementById('output').innerText = msg;
    }
